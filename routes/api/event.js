const express = require('express');
const router = express.Router();
const Event = require('../../models/Event')

// @route   POST api/eventRoute
// @desc    Add event to db
// @access  Private
router.post(
    '/', 
    async (req,res) => {

        const { 
            type, 
            title,
            description,
            date,
            end_date,
            timeIn,
            timeOut,
            recurringDays,
            start,
            end,
            allDay,
            resource
        } = req.body;

        try {
            // See if event exists
            let event = await Event.findOne({ title })

            if(event) {
                return res
                .status(400)
                .json({ errors: [ { msg: 'Event already included for this time'} ] });
            }
            event = new Event({
                type, 
                title,
                description,
                date,
                end_date,
                timeIn,
                timeOut,
                recurringDays,
                start,
                end,
                allDay,
                resource
            });    
            event.save()
            res.json(event)
            
        } catch(err) {
            console.log(err.message);
            res.status(500).send('Server error')            
        }
    }
);

router.get('/', async (req, res) => {
    try {
        const events = await Event.find().sort({ date: -1 });
        res.json(events);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;