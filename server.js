const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors'); // Add CORS for frontend-backend communication

const app = express();

// Connect to MongoDB (via connectDB)
connectDB();

// Middleware
app.use(express.json({ extended: false })); // JSON parsing
app.use(cors()); // Enable CORS for frontend requests

// Define Routes
app.use('/api/users', require('./routes/api/users'));
// app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
// app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/event', require('./routes/api/event'));

// Serve static assets if in production (for React frontend)
if (process.env.NODE_ENV === 'production') {
  // Set static folder to only client/build (remove client/src/styles)
  app.use(express.static(path.join(__dirname, 'client', 'build')));

  // Serve index.html for any unrecognized routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));