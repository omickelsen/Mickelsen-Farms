const fs = require('fs');
const moment = require('moment');

const filePath = '../client/public/test.newevents.json';
const eventsData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const cleanedEvents = eventsData.map(event => {
  try {
    if (!event || typeof event !== 'object') return null;
    let eventDateStr = event.start || event.date || event.end_date;
    if (!eventDateStr) {
      console.warn('Event missing start, date, and end_date, adding default:', event.title);
      eventDateStr = { $date: moment('2024-12-04').hour(19).minute(30).second(0).format('YYYY-MM-DDTHH:mm:ss.SSSZ') }; // Default to Dec 4, 2024, 7:30 PM
      event.start = eventDateStr;
      event.date = eventDateStr;
      event.end_date = eventDateStr;
    }
    if (typeof eventDateStr === 'object' && eventDateStr.$date) {
      eventDateStr = eventDateStr.$date; // Extract ISO 8601 string
    }
    if (!event.start) {
      console.warn('Event missing start, adding from date:', event.title);
      event.start = { $date: eventDateStr };
    }
    if (!event.end) {
      console.warn('Event missing end, adding default duration:', event.title);
      const baseDate = moment(eventDateStr, 'YYYY-MM-DDTHH:mm:ss.SSSZ', true);
      if (!baseDate.isValid()) {
        console.warn('Invalid base date, skipping end addition:', eventDateStr);
      } else {
        const durationSeconds = (event.endTime || 0) - (event.startTime || 0);
        event.end = { $date: moment(baseDate).add(moment.duration({ seconds: durationSeconds <= 0 ? 3600 : durationSeconds })).format('YYYY-MM-DDTHH:mm:ss.SSSZ') };
      }
    }
    const date = moment(eventDateStr, 'YYYY-MM-DDTHH:mm:ss.SSSZ', true);
    if (!date.isValid()) {
      console.warn('Invalid date found, correcting:', eventDateStr);
      const correctedDate = moment(eventDateStr, 'YYYY-MM-DD', true).set({
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
      });
      if (!correctedDate.isValid()) {
        console.error('Unable to correct date, skipping:', event);
        return null;
      }
      event.start = { $date: correctedDate.format('YYYY-MM-DDTHH:mm:ss.SSSZ') };
      event.date = { $date: correctedDate.format('YYYY-MM-DDTHH:mm:ss.SSSZ') };
      event.end_date = { $date: correctedDate.format('YYYY-MM-DDTHH:mm:ss.SSSZ') };
    }
    return event;
  } catch (error) {
    console.error('Error processing event:', event, error);
    return null;
  }
}).filter(event => event !== null);

fs.writeFileSync(filePath, JSON.stringify(cleanedEvents, null, 2), 'utf8');
console.log('Cleaned test.newevents.json with valid dates, added missing start/end, and adjusted to 2024');