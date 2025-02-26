const fs = require('fs');

const filePath = '../client/public/test.newevents.json';
const eventsData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Deduplicate based on id, date, startTime, and endTime
const uniqueEvents = Array.from(new Map(eventsData.map(event => [
  [event.id + '-' + event.date + '-' + event.startTime + '-' + event.endTime, event]
])).values());

fs.writeFileSync(filePath, JSON.stringify(uniqueEvents, null, 2), 'utf8');
console.log('Removed duplicates from test.newevents.json');