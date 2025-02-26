const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // Consistent with models/User.js
  },
  status: {
    type: String,
    required: true
  },
  bio: {
    type: String
  },
  skills: {
    type: String
  },
  avatar: {
    type: String, // Changed from 'img' with Buffer to String for URL consistency with UserSchema
    default: '' // Added default for optional field
  },
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    instagram: {
      type: String
    },
    linkedin: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true // Added to track creation and update times
});

module.exports = mongoose.model('Profile', ProfileSchema);