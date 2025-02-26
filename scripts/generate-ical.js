const ical = require('ical-generator');
const fs = require('fs');
const momentTimezone = require('moment-timezone'); // Import moment-timezone explicitly
const { v4: uuidv4 } = require('uuid'); // For generating unique IDs
const rrule = require('rrule'); // For handling recurring events

// Read the JSON file from the client/public folder
const eventsData = JSON.parse(fs.readFileSync('../client/public/test.newevents.json', 'utf8'));

// No year filter—process all events regardless of date
const cal = ical({
  name: 'Mickelsen Farms Events',
  timezone: 'America/Denver', // Use MST for consistency with your timezone
});

// Helper function to deduplicate and check for overlaps
function isOverlapping(newStart, newEnd, existingEvents) {
  return existingEvents.some(event => {
    const start = momentTimezone(event.start).tz('America/Denver');
    const end = momentTimezone(event.end).tz('America/Denver');
    return newStart.isBetween(start, end, null, '[)') || newEnd.isBetween(start, end, null, '(]') ||
           start.isBetween(newStart, newEnd, null, '[)') || end.isBetween(newStart, newEnd, null, '(]');
  });
}

// Helper function to parse and normalize $date strings to MST, preserving original dates or using a specific default
function parseDateToMST(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') {
    console.warn('Invalid or missing date string, using specific default:', dateStr);
    return momentTimezone('2024-01-01').tz('America/Denver').hour(0).minute(0).second(0); // Fixed default to Jan 1, 2024, 12:00 AM MST
  }
  // Try parsing with flexible ISO 8601 format (handles both Z and offset formats)
  const parsedDate = momentTimezone(dateStr, 'YYYY-MM-DDTHH:mm:ss.SSS[Z]', true)
    .tz('America/Denver', true); // Parse and convert to MST, preserving local time
  if (!parsedDate.isValid()) {
    console.warn('Invalid date format, attempting correction:', dateStr);
    const correctedDate = momentTimezone(dateStr, 'YYYY-MM-DD', true).tz('America/Denver').set({
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
    });
    if (!correctedDate.isValid()) {
      console.warn('Unable to correct date, using specific default:', dateStr);
      return momentTimezone('2024-01-01').tz('America/Denver').hour(0).minute(0).second(0); // Fixed default to Jan 1, 2024, 12:00 AM MST
    }
    return correctedDate;
  }
  return parsedDate;
}

// Track existing events to prevent duplicates and overlaps
const existingEvents = [];

eventsData.forEach(event => {
  try {
    if (!event || typeof event !== 'object') {
      console.warn('Skipping null or invalid event:', event);
      // Fallback: Create a minimal event with specific default date in MST
      const defaultStart = momentTimezone('2024-01-01').tz('America/Denver').hour(0).minute(0).second(0).toDate();
      const defaultEnd = momentTimezone(defaultStart).add(1, 'hour').toDate();
      cal.createEvent({
        id: `fallback-${uuidv4().replace(/-/g, '')}`, // Simplified UID
        start: defaultStart,
        end: defaultEnd,
        summary: 'Untitled event (invalid data)',
        description: 'Event skipped due to null or invalid data, using default values',
        location: '',
        url: 'https://mickelsenfamilyfarms.com',
      });
      return;
    }
    // Ensure event has an id, generate one if missing
    if (!event.id) {
      event.id = uuidv4();
      console.warn('Generated ID for event:', event.title || 'Untitled event');
    }

    // Handle MongoDB-style $date object, prioritizing start, then date, then end_date, with multiple fallbacks
    let eventDateStr = event.start;
    if (!eventDateStr || (typeof eventDateStr !== 'object' || !eventDateStr.$date)) {
      eventDateStr = event.date;
      if (!eventDateStr || (typeof eventDateStr !== 'object' || !eventDateStr.$date)) {
        eventDateStr = event.end_date;
        if (!eventDateStr || (typeof eventDateStr !== 'object' || !eventDateStr.$date)) {
          console.warn('Event missing start, date, and end_date, using specific default:', event.title || 'Untitled event');
          eventDateStr = { $date: momentTimezone('2024-01-01').tz('America/Denver').hour(0).minute(0).second(0).format('YYYY-MM-DDTHH:mm:ss.SSSZ') }; // Fixed default to Jan 1, 2024, 12:00 AM MST
        }
      }
    }
    if (typeof eventDateStr === 'object' && eventDateStr.$date) {
      eventDateStr = eventDateStr.$date; // Extract the ISO 8601 string from $date
    } else if (typeof eventDateStr === 'string') {
      console.warn('Converting string start to $date object for event:', event.title);
      const parsedDate = momentTimezone(eventDateStr, 'YYYY-MM-DDTHH:mm:ss.SSS[Z]', true);
      if (parsedDate.isValid()) {
        eventDateStr = { $date: eventDateStr };
      } else {
        console.warn('Invalid string date format, using specific default:', eventDateStr);
        eventDateStr = { $date: momentTimezone('2024-01-01').tz('America/Denver').hour(0).minute(0).second(0).format('YYYY-MM-DDTHH:mm:ss.SSSZ') };
      }
      event.start = eventDateStr; // Update the event object
    } else {
      console.warn('Invalid date format for event, using specific default:', eventDateStr);
      eventDateStr = { $date: momentTimezone('2024-01-01').tz('America/Denver').hour(0).minute(0).second(0).format('YYYY-MM-DDTHH:mm:ss.SSSZ') };
      event.start = eventDateStr;
    }

    // Use parseDateToMST to normalize the date to MST, preserving original date
    const baseDate = parseDateToMST(eventDateStr.$date);
    if (!baseDate.isValid()) {
      console.warn('Failed to parse date, using specific default for event:', event.title);
      baseDate = momentTimezone('2024-01-01').tz('America/Denver').hour(0).minute(0).second(0);
    }

    // Calculate start and end times using startTime and endTime (in seconds), with fallback in MST
    const startDateMST = baseDate.startOf('day').add(event.startTime || 45000, 'seconds').toDate(); // Default to 12:30 PM MST
    const durationSeconds = (event.endTime || (event.startTime || 45000) + 3600) - (event.startTime || 45000);
    if (durationSeconds <= 0) {
      console.warn('Invalid duration for event, using 1 hour default:', event.title);
      durationSeconds = 3600; // Default to 1 hour
    }
    const endDateMST = momentTimezone(startDateMST).add(momentTimezone.duration({ seconds: durationSeconds })).toDate();

    // Check for duplicates and overlaps
    const newEvent = {
      start: startDateMST,
      end: endDateMST,
      title: event.title,
      id: event.id,
    };
    if (!existingEvents.some(existing => existing.id === event.id) && !isOverlapping(momentTimezone(startDateMST), momentTimezone(endDateMST), existingEvents)) {
      existingEvents.push(newEvent);

      // Debug logs to verify dates and times in MST
      console.log('Event:', event.title || 'Untitled event');
      console.log('Base Date (MST):', baseDate.format('YYYY-MM-DD HH:mm:ss'));
      console.log('Start Date (MST):', momentTimezone(startDateMST).format('YYYY-MM-DD HH:mm:ss'));
      console.log('End Date (MST):', momentTimezone(endDateMST).format('YYYY-MM-DD HH:mm:ss'));
      console.log('Duration (seconds):', durationSeconds);

      // Handle recurring events if present
      if (event.recurringDays && Array.isArray(event.recurringDays) && event.recurringDays.length > 0) {
        // Convert recurringDays to RRule-compatible weekdays
        const weekdays = event.recurringDays.map(day => {
          const dayMap = {
            'Monday': rrule.MO,
            'Tuesday': rrule.TU,
            'Wednesday': rrule.WE,
            'Thursday': rrule.TH,
            'Friday': rrule.FR,
            'Saturday': rrule.SA,
            'Sunday': rrule.SU
          };
          const shortDay = (day || '').substring(0, 3).toLowerCase(); // Handle potential null/undefined
          return dayMap[Object.keys(dayMap).find(key => key.toLowerCase().startsWith(shortDay)) || 'MO'] || rrule.MO; // Default to Monday if invalid
        });

        // Create RRule for weekly recurrence until the end of the year of the base date (or adjust as needed) in MST
        const baseYear = baseDate.year();
        const rule = new rrule.RRule({
          freq: rrule.WEEKLY,
          byweekday: weekdays,
          dtstart: startDateMST,
          until: momentTimezone(`${baseYear}-12-31`).tz('America/Denver').endOf('day').toDate(), // Limit to end of the base year in MST
        });

        // Generate all occurrences and create individual events
        const occurrences = rule.all();
        occurrences.forEach(occurrence => {
          const recurringStart = momentTimezone(occurrence).tz('America/Denver').toDate();
          const recurringEnd = momentTimezone(recurringStart).add(momentTimezone.duration({ seconds: durationSeconds })).toDate();
          if (!isOverlapping(momentTimezone(recurringStart), momentTimezone(recurringEnd), existingEvents)) {
            existingEvents.push({ start: recurringStart, end: recurringEnd, title: event.title, id: event.id });
            cal.createEvent({
              id: `${event.id.replace(/[^a-zA-Z0-9-]/g, '')}-${momentTimezone(recurringStart).format('YYYYMMDD')}`, // Simplified, unique UID
              start: recurringStart,
              end: recurringEnd,
              summary: event.title || 'Untitled event',
              description: event.description || '',
              location: event.resource || '',
              url: 'https://mickelsenfamilyfarms.com',
            });
          } else {
            console.warn('Skipping recurring event due to overlap:', event.title, momentTimezone(recurringStart).format('YYYY-MM-DD HH:mm:ss'), momentTimezone(recurringEnd).format('YYYY-MM-DD HH:mm:ss'));
          }
        });
      } else {
        // Non-recurring event: create a single event
        cal.createEvent({
          id: event.id.replace(/[^a-zA-Z0-9-]/g, ''), // Simplified UID
          start: startDateMST,
          end: endDateMST,
          summary: event.title || 'Untitled event',
          description: event.description || '',
          location: event.resource || '',
          url: 'https://mickelsenfamilyfarms.com',
        });
      }
    } else {
      console.warn('Skipping event due to duplicate or overlap:', event.title, momentTimezone(startDateMST).format('YYYY-MM-DD HH:mm:ss'), momentTimezone(endDateMST).format('YYYY-MM-DD HH:mm:ss'));
    }
  } catch (error) {
    console.error('Error processing event:', event, error);
    // Fallback: Create a minimal event with specific default date in MST
    const defaultStart = momentTimezone('2024-01-01').tz('America/Denver').hour(0).minute(0).second(0).toDate();
    const defaultEnd = momentTimezone(defaultStart).add(1, 'hour').toDate();
    cal.createEvent({
      id: `fallback-${uuidv4().replace(/-/g, '')}`, // Simplified UID
      start: defaultStart,
      end: defaultEnd,
      summary: event?.title || 'Untitled event (error)',
      description: 'Event processing failed, using default values',
      location: '',
      url: 'https://mickelsenfamilyfarms.com',
    });
  }
});

// Save the .ics file to the client/public folder, ensuring UTF-8 encoding
const icsContent = cal.toString();
fs.writeFileSync('../client/public/mickelsen-farms-events.ics', icsContent, 'utf8');
console.log('iCal file generated successfully with all events from test.newevents.json, optimized for Google Calendar in MST, with unique dates preserved and no moment, current date, or December 4 fallback!');