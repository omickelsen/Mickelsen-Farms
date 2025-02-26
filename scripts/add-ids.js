const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); // Install with `npm install uuid`

const filePath = '../client/public/test.newevents.json';
const eventsData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const updatedEvents = eventsData.map(event => {
  if (!event || typeof event !== 'object') return null;
  if (!event.id) {
    event.id = uuidv4(); // Generate a unique ID
    console.log('Added ID for event:', event.title || 'Untitled event');
  }
  return event;
}).filter(event => event !== null);

fs.writeFileSync(filePath, JSON.stringify(updatedEvents, null, 2), 'utf8');
console.log('Added missing IDs and cleaned invalid events from test.newevents.json');