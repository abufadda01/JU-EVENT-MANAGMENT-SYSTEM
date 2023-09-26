const mongoose = require('mongoose')


const eventSchema = new mongoose.Schema({
    event_name : {
        type: String ,
        uppercase : true,
        unique : true
    },
    event_date : {
        type : String
    },
    event_loc : {
        type : String
    },
    event_time : {
        type : String
    },
    event_desc : {
        type: String
    },
    limit : {
        type : Number ,
        default : 0
    },
    created_time_db : {
        type : Date ,
        default : Date.now
    },
})



const Event = mongoose.model('events' , eventSchema)
// create events collection

module.exports = Event