const fs = require('fs');
try {
  const data = fs.readFileSync('../client/public/test.newevents.json', 'utf8');
  console.log('File found:', data);
} catch (err) {
  console.error('Error:', err);
}