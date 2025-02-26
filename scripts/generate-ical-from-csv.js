const ical = require('ical-generator');
const fs = require('fs');
const csv = require('csv-parse');
const momentTimezone = require('moment-timezone'); // Import moment-timezone explicitly
const { v4: uuidv4 } = require('uuid'); // For generating unique IDs
const rrule = require('rrule'); // For handling recurring events

// Read the CSV file from the client/public folder
const csvFilePath = '../client/public/mickelsen-farms-events.csv';
const icsFilePath = '../client/public/mickelsen-farms-events.ics';

// No year filter—process all events regardless of date
const cal = ical({
  name: 'Mickelsen Farms Events',
  timezone: 'America/Denver', // Use MST for consistency with your timezone
});

// Process all events, including overlaps and duplicates
fs.createReadStream(csvFilePath)
  .pipe(csv.parse({ columns: true, trim: true }))
  .on('data', (row) => {
    try {
      if (!row.id || !row.title) {
        console.warn('Skipping invalid row (missing id or title):', row);
        return;
      }

      // Parse dates and times
      const startDate = momentTimezone(row.startDate, 'YYYY-MM-DD HH:mm:ss').tz('America/Denver');
      if (!startDate.isValid()) {
        console.warn('Invalid start date for event, using specific default:', row.title, row.startDate);
        startDate = momentTimezone('2024-01-01').tz('America/Denver').hour(0).minute(0).second(0); // Fixed default to Jan 1, 2024, 12:00 AM MST
      }

      let endDate;
      if (row.endDate) {
        endDate = momentTimezone(row.endDate, 'YYYY-MM-DD HH:mm:ss').tz('America/Denver');
        if (!endDate.isValid()) {
          console.warn('Invalid end date for event, using start date + 1 hour:', row.title, row.endDate);
          endDate = momentTimezone(startDate).add(1, 'hour');
        }
      } else {
        const startTimeSeconds = parseInt(row.startTime, 10) || 45000; // Default to 12:30 PM
        const endTimeSeconds = parseInt(row.endTime, 10) || (startTimeSeconds + 3600); // Default to 1 hour later
        endDate = momentTimezone(startDate).startOf('day').add(endTimeSeconds, 'seconds').tz('America/Denver');
      }

      // Ensure end time is after start time
      if (endDate.isBefore(startDate)) {
        console.warn('Invalid duration for event, using 1 hour default:', row.title);
        endDate = momentTimezone(startDate).add(1, 'hour');
      }

      // Debug logs to verify dates and times in MST
      console.log('Event:', row.title);
      console.log('Start Date (MST):', startDate.format('YYYY-MM-DD HH:mm:ss'));
      console.log('End Date (MST):', endDate.format('YYYY-MM-DD HH:mm:ss'));

      // Handle recurring events if present
      if (row.recurringDays && row.recurringDays.trim()) {
        const weekdays = row.recurringDays.split(',').map(day => {
          const dayMap = {
            'Mon': rrule.MO,
            'Tue': rrule.TU,
            'Wed': rrule.WE,
            'Thu': rrule.TH,
            'Fri': rrule.FR,
            'Sat': rrule.SA,
            'Sun': rrule.SU
          };
          const trimmedDay = day.trim().substring(0, 3).toLowerCase();
          return dayMap[Object.keys(dayMap).find(key => key.toLowerCase() === trimmedDay) || 'MO'] || rrule.MO; // Default to Monday if invalid
        });

        // Create RRule for weekly recurrence until the end of the year of the start date in MST
        const baseYear = startDate.year();
        const rule = new rrule.RRule({
          freq: rrule.WEEKLY,
          byweekday: weekdays,
          dtstart: startDate.toDate(),
          until: momentTimezone(`${baseYear}-12-31`).tz('America/Denver').endOf('day').toDate(), // Limit to end of the base year in MST
        });

        // Generate all occurrences and create individual events
        const occurrences = rule.all();
        occurrences.forEach(occurrence => {
          const recurringStart = momentTimezone(occurrence).tz('America/Denver').toDate();
          const recurringEnd = momentTimezone(recurringStart).add(momentTimezone.duration({ seconds: endDate.diff(startDate, 'seconds') })).toDate();
          cal.createEvent({
            id: `${row.id.replace(/[^a-zA-Z0-9-]/g, '')}-${momentTimezone(recurringStart).format('YYYYMMDD')}`, // Simplified, unique UID
            start: recurringStart,
            end: recurringEnd,
            summary: row.title,
            description: row.description || '',
            location: row.resource || '',
            url: 'https://mickelsenfamilyfarms.com',
          });
        });
      } else {
        // Non-recurring event: create a single event
        cal.createEvent({
          id: row.id.replace(/[^a-zA-Z0-9-]/g, ''), // Simplified UID
          start: startDate.toDate(),
          end: endDate.toDate(),
          summary: row.title,
          description: row.description || '',
          location: row.resource || '',
          url: 'https://mickelsenfamilyfarms.com',
        });
      }
    } catch (error) {
      console.error('Error processing row:', row, error);
      // Fallback: Create a minimal event with specific default date in MST
      const defaultStart = momentTimezone('2024-01-01').tz('America/Denver').hour(0).minute(0).second(0).toDate();
      const defaultEnd = momentTimezone(defaultStart).add(1, 'hour').toDate();
      cal.createEvent({
        id: `fallback-${uuidv4().replace(/-/g, '')}`, // Simplified UID
        start: defaultStart,
        end: defaultEnd,
        summary: row?.title || 'Untitled event (error)',
        description: 'Event processing failed, using default values',
        location: '',
        url: 'https://mickelsenfamilyfarms.com',
      });
    }
  })
  .on('end', () => {
    // Save the .ics file to the client/public folder, ensuring UTF-8 encoding
    const icsContent = cal.toString();
    fs.writeFileSync(icsFilePath, icsContent, 'utf8');
    console.log('iCal file generated successfully with all events from mickelsen-farms-events.csv, optimized for Google Calendar in MST, including overlaps and duplicates as requested!');
  })
  .on('error', (error) => {
    console.error('Error parsing CSV:', error);
  });

// Install required dependencies
// npm install ical-generator moment-timezone csv-parse uuid rrule