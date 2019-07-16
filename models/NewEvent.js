const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewEventSchema = new Schema({
    type: {
        type: Schema.Types.ObjectId,
        ref: 'users'
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
    startTime: {
        type:  Number,
        required: true
    },
    endTime: {
        type: Number,
        required: true
    }
});

module.exports = NewEvent = mongoose.model('newevent', NewEventSchema)