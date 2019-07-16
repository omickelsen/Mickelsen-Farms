const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
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
    img: {
        data: Buffer, 
        contentType: String
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
        },
    },
    date: {
        type: Date, 
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema)