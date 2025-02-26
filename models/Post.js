const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User' // Consistent with models/User.js
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User' // Consistent with models/User.js
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId, // Changed from String to ObjectId for consistency
        ref: 'User' // Consistent with models/User.js
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true // Added to track creation and update times
});

module.exports = mongoose.model('Post', PostSchema);