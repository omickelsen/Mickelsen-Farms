const fs = require('fs');
const momentTimezone = require('moment-timezone');
const { v4: uuidv4 } = require('uuid'); // For generating unique IDs

const filePath = '../client/public/test.newevents.json';

function validateJson(data) {
  data.forEach((event, index) => {
    if (!event || typeof event !== 'object' || !event.id) {
      console.warn(`Invalid or missing event at index ${index}:`, event);
    }
    if (!event.start && !event.date) {
      console.warn(`Event at index ${index} missing start and date:`, event);
    } else if (event.start && typeof event.start !== 'object') {
      console.warn(`Event at index ${index} has invalid start format (not an object):`, event.start);
    } else if (event.start && !event.start.$date) {
      console.warn(`Event at index ${index} missing $date in start:`, event.start);
    } else {
      const dateStr = event.start.$date;
      const date = momentTimezone(dateStr, 'YYYY-MM-DDTHH:mm:ss.SSS[Z]', true).tz('America/Denver');
      if (!date.isValid()) {
        console.warn(`Event at index ${index} has invalid start date: ${dateStr}`, event);
      } else {
        console.log(`Event at index ${index} start date (MST):`, date.format('YYYY-MM-DD HH:mm:ss'));
      }
    }
    if (event.startTime == null || event.endTime == null || event.endTime <= event.startTime) {
      console.warn(`Event at index ${index} has invalid startTime or endTime:`, event);
    }
    if (event.recurringDays && !Array.isArray(event.recurringDays)) {
      console.warn(`Event at index ${index} has invalid recurringDays (not an array):`, event.recurringDays);
    }
  });
  console.log('Validation complete');
}

function addIds(data) {
  return data.map(event => {
    if (!event || typeof event !== 'object') return null;
    if (!event.id) {
      event.id = uuidv4();
      console.log('Added ID for event:', event.title || 'Untitled event');
    }
    return event;
  }).filter(event => event !== null);
}

function cleanDates(data) {
  return data.map(event => {
    try {
      if (!event || typeof event !== 'object') return null;
      let eventDateStr = event.start || event.date || event.end_date;
      if (!eventDateStr) {
        console.warn('Event missing start, date, and end_date, adding default:', event.title || 'Untitled event');
        eventDateStr = { $date: momentTimezone('2024-12-04').tz('America/Denver').hour(19).minute(30).second(0).format('YYYY-MM-DDTHH:mm:ss.SSSZ') }; // Default to Dec 4, 2024, 7:30 PM MST
        event.start = eventDateStr;
        event.date = eventDateStr;
        event.end_date = eventDateStr;
      }
      if (typeof eventDateStr !== 'object' || !eventDateStr.$date) {
        console.warn('Invalid date format for event, correcting:', eventDateStr);
        const parsedDate = momentTimezone(eventDateStr, 'YYYY-MM-DDTHH:mm:ss.SSS[Z]', true);
        eventDateStr = parsedDate.isValid() ? { $date: eventDateStr } : { $date: momentTimezone('2024-12-04').tz('America/Denver').hour(19).minute(30).second(0).format('YYYY-MM-DDTHH:mm:ss.SSSZ') };
        event.start = eventDateStr;
        event.date = eventDateStr;
        event.end_date = eventDateStr;
      }
      eventDateStr = eventDateStr.$date; // Extract ISO 8601 string
      const baseDate = momentTimezone(eventDateStr, 'YYYY-MM-DDTHH:mm:ss.SSS[Z]', true).tz('America/Denver');
      if (!baseDate.isValid()) {
        console.warn('Invalid date found, correcting for event:', event.title);
        const correctedDate = momentTimezone(eventDateStr, 'YYYY-MM-DD', true).tz('America/Denver').set({
          hour: 0,
          minute: 0,
          second: 0,
          millisecond: 0,
        });
        if (!correctedDate.isValid()) {
          console.error('Unable to correct date, skipping:', event);
          return null;
        }
        eventDateStr = correctedDate.format('YYYY-MM-DDTHH:mm:ss.SSSZ');
        event.start = { $date: eventDateStr };
        event.date = { $date: eventDateStr };
        event.end_date = { $date: eventDateStr };
      }
      if (!event.start || typeof event.start !== 'object' || !event.start.$date) {
        console.warn('Event missing or invalid start, adding from date:', event.title);
        event.start = { $date: eventDateStr };
      }
      if (!event.end || typeof event.end !== 'object' || !event.end.$date) {
        console.warn('Event missing or invalid end, adding default duration:', event.title);
        const baseDate = momentTimezone(eventDateStr, 'YYYY-MM-DDTHH:mm:ss.SSS[Z]', true).tz('America/Denver');
        if (!baseDate.isValid()) {
          console.warn('Invalid base date, skipping end addition:', eventDateStr);
        } else {
          const durationSeconds = (event.endTime || 0) - (event.startTime || 0);
          event.end = { $date: momentTimezone(baseDate).add(moment.duration({ seconds: durationSeconds <= 0 ? 3600 : durationSeconds })).format('YYYY-MM-DDTHH:mm:ss.SSSZ') };
        }
      }
      if (event.startTime == null || event.endTime == null || event.endTime <= event.startTime) {
        console.warn('Correcting invalid duration for:', event.title);
        event.startTime = event.startTime || 45000; // Default to 12:30 PM
        event.endTime = event.endTime || (event.startTime + 3600); // Default to 1-hour duration
      }
      return event;
    } catch (error) {
      console.error('Error processing event:', error);
      return null;
    }
  }).filter(event => event !== null);
}

async function prepareEvents() {
  try {
    // Verify the file exists
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    // Read the initial JSON
    let eventsData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Step 1: Validate JSON
    console.log('Validating JSON...');
    validateJson(eventsData);

    // Step 2: Add missing IDs
    console.log('Adding missing IDs...');
    eventsData = addIds(eventsData);

    // Step 3: Clean and correct dates and times
    console.log('Cleaning and correcting dates and times...');
    eventsData = cleanDates(eventsData);

    // Write the updated JSON back to the file
    fs.writeFileSync(filePath, JSON.stringify(eventsData, null, 2), 'utf8');
    console.log('Successfully prepared test.newevents.json with all fixes applied!');
  } catch (error) {
    console.error('Error preparing test.newevents.json:', error.message);
    process.exit(1);
  }
}

// Run the automation
prepareEvents();