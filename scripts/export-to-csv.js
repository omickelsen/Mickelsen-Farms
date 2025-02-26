const fs = require('fs');
const momentTimezone = require('moment-timezone');
const csv = require('csv-stringify');

const jsonFilePath = '../client/public/test.newevents.json';
const csvFilePath = '../client/public/mickelsen-farms-events.csv';

// Read the JSON file
const eventsData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

// Helper function to parse and normalize $date strings to MST
function parseDateToMST(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') {
    return 'Invalid or missing date';
  }
  const parsedDate = momentTimezone(dateStr, 'YYYY-MM-DDTHH:mm:ss.SSS[Z]', true)
    .tz('America/Denver', true); // Parse and convert to MST
  if (!parsedDate.isValid()) {
    return 'Invalid date';
  }
  return parsedDate.format('YYYY-MM-DD HH:mm:ss');
}

// Transform JSON data into CSV format
const csvData = eventsData.map(event => ({
  id: event.id || '',
  title: event.title || 'Untitled event',
  description: event.description || '',
  startDate: parseDateToMST(event.start?.['$date']) || parseDateToMST(event.date?.['$date']) || parseDateToMST(event.end_date?.['$date']) || '2024-01-01 00:00:00',
  endDate: parseDateToMST(event.end?.['$date']) || parseDateToMST(event.end_date?.['$date']) || '',
  startTime: event.startTime || 0, // In seconds since midnight
  endTime: event.endTime || 3600, // Default to 1 hour if not provided
  recurringDays: (event.recurringDays || []).join(', '),
  resource: event.resource || '',
}));

// Define CSV headers
const headers = ['id', 'title', 'description', 'startDate', 'endDate', 'startTime', 'endTime', 'recurringDays', 'resource'];

// Write to CSV file
csv.stringify(csvData, { header: true, columns: headers }, (err, output) => {
  if (err) throw err;
  fs.writeFileSync(csvFilePath, output, 'utf8');
  console.log('CSV file generated successfully at:', csvFilePath);
});

// Install required dependencies
// npm install moment-timezone csv-stringify