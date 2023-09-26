const express = require("express");
require("dotenv").config({ path: "./.env" });
const userAuth = require("../MIDDLEWARE/userAuthMiddleware");

const router = express.Router();

const Event = require("../MODELS/eventsModel");
const User = require("../MODELS/userModel");




// get all events route
router.get("/", async (req, res) => {
  const events = await Event.find();
  try {
    res.send(events);
  } catch (error) {
    res.json({ msg: error });
  }
});





router.get("/:event_name", async (req, res) => {
  const event = await Event.find({ event_name: req.params.event_name });
  try {
    res.send(event);
  } catch (error) {
    res.json({ msg: error });
  }
});




// post a new event route
router.post("/", async (req, res) => {
  const { event_name, event_desc, event_date, event_img, event_loc } = req.body;

  try {
    let event = new Event({
      event_name,
      event_desc,
      event_date,
      event_img,
      event_loc,
    });

    await event.save();

    res.send(event);
  } catch (error) {
    res.json({ msg: error });
  }
});






// put route to update the user doc obj and add the saved events to the user schema
router.put("/", userAuth , async (req, res) => {

  let eventid = req.body.eventID;
  let event = await Event.findById(req.body.eventID);
  let user = await User.findById(req.body.userID);

  try { 

    const eventAlreadyBooked = user.bookedEvents.includes(eventid)
    const eventLimit = event.limit
  
    if(eventAlreadyBooked){
      res.json({status : false  , bookedError : "Event already booked " })
      return;
    }

    if(eventLimit == 35){
      res.json({status : false , bookedError : "full seats "})
      return;
    }
    

 
    await user.bookedEvents.push(event);

    
    event = await Event.findByIdAndUpdate(
      eventid,
      {
        limit: event.limit += 1   
      },
      { new: true }
    );

    await user.save();
    await event.save();

    res.json({
      bookedEvents: user.bookedEvents,
      userEmail: user.email,
      status : true
    });

    

  } catch (error) {
    res.json({ msg: error });
  }
});





// get current user booked Events
router.get("/savedEvents/:userID", async (req, res) => {

  // get the user doc obj
  const user = await User.findById(req.params.userID);

  // get the all events in db
  const events = await Event.find({})

  
  try {
    // get the mutal events by the find the events id that matched the bookedEvents id in the user doc
    const bookedEventsArray = await Event.find({
      _id : {$in : user.bookedEvents} 
    })

    res.json({bookedEventsArray}) 

    

  } catch (error) {
    res.json({msg : error})
  }

})













module.exports = router;
