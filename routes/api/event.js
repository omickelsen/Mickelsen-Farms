const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth'); // Added for private access
const Event = require('../../models/Event');

// @route   POST api/event
// @desc    Add event to db
// @access  Private
router.post(
  '/',
  auth, // Added auth middleware for private access
  async (req, res) => {
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
      // See if event exists (optional, uncomment if needed)
      // let event = await Event.findOne({ title, start });
      // if (event) {
      //   return res.status(400).json({ errors: [{ msg: 'Event already exists for this time' }] });
      // }

      const event = new Event({
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
        resource,
        user: req.user.id // Added to associate event with user (optional, adjust model if needed)
      });

      await event.save();
      res.json(event);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

router.get('/', auth, async (req, res) => { // Added auth for private access
  try {
    const events = await Event.find({ user: req.user.id }).sort({ date: 1 }); // Filter by user if private
    console.log(events);
    res.json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.delete('/delete/:id', auth, async (req, res) => { // Added auth for private access
  try {
    console.log(req.params.id);

    const event = await Event.findOne({ _id: req.params.id, user: req.user.id }); // Filter by user
    if (!event) {
      return res.status(404).json({ msg: 'Event not found or not authorized' });
    }

    await event.deleteOne(); // Replaced remove() with deleteOne() (modern Mongoose)
    res.json({ msg: 'Event has been removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Event not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;