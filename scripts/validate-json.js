const fs = require('fs');
const momentTimezone = require('moment-timezone');

const filePath = '../client/public/test.newevents.json';
const eventsData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

eventsData.forEach((event, index) => {
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