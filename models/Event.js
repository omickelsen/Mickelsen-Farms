const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewEventSchema = new Schema({
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
        
    },
    end: {
        type: Date,
        
    },
    end_date: {
        type: Date,
        default: Date.now,
        required: true
    },
    timeIn: {
        type: Number,
        required: true
    },
    timeOut: {
        type: Number,
        required: true
    },
    recurringDays: {
        type: [],
        required: true
    },
    allDay: {
        type: Boolean
    },
    resource: {
        type: String
    }
});

module.exports = NewEvent = mongoose.model('newevent', NewEventSchema)