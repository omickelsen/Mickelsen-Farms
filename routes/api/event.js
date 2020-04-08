const express = require('express');
const router = express.Router();
const Event = require('../../models/Event');

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
            startTime,
            endTime,
            recurringDays,
            start,
            end,
            allDay,
            resource
        } = req.body;
        console.log(req.body);

        try {
            // See if event exists
            // let event = await Event.findOne({ title })

            // if(event) {
            //     return res
            //     .status(400)
            //     .json({ errors: [ { msg: 'Event already included for this time'} ] });
            // }
            let event = new Event({
                type, 
                title,
                description,
                date,
                end_date,
                startTime,
                endTime,
                recurringDays,
                start,
                end,
                allDay,
                resource
            });    
            event.save();
            res.json(event);
            
        } catch(err) {
            console.log(err.message);
            res.status(500).send('Server error')            
        }
    }
);

router.get('/', async (req, res) => {
    try {
        const events = await Event.find().sort({date: 1});
        console.log(events);
        res.json(events);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        
        let remEvent = await Event.findOne( {_id: {'$eq':req.params.id}} );
        console.log('my Event' + remEvent);
        
        await remEvent.remove();

        res.json({ msg: 'Event has been removed' });
    } catch (err) {
        console.error(err.message);
        if(err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Event not found' });
        }
        res.status(500).send('Server Error');
    }
});

module.exports = router;
