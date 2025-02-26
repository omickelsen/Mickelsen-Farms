const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  start: {
    type: Date,
    default: null // Added default for optional field
  },
  end: {
    type: Date,
    default: null // Added default for optional field
  },
  end_date: {
    type: Date,
    default: Date.now,
    required: true
  },
  startTime: {
    type: Number,
    required: true
  },
  endTime: {
    type: Number,
    required: true
  },
  recurringDays: {
    type: [String], // Changed from 'type: []' to specify String array
    required: true
  },
  allDay: {
    type: Boolean,
    default: false // Added default for optional field
  },
  resource: {
    type: String,
    default: '' // Added default for optional field
  }
}, {
  timestamps: true // Added to track creation and update times
});

module.exports = mongoose.model('Event', EventSchema); // Changed model name to 'Event' for clarity