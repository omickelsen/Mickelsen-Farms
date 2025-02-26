const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: '' // Added default for optional field
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true // Added to track creation and update times
});

module.exports = mongoose.model('User', UserSchema);