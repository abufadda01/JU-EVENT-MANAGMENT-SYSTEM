const mongoose = require('mongoose')
const validator = require('validator')



const organizerSchema = new mongoose.Schema({
    org_email : {
        type : String ,
        required : [true , 'please fill the email field' ] ,
        validate : [validator.isEmail , 'please enter a valid email structure']
    },
    org_phone_num : {
        type : Number ,
        required :  [true , 'please fill the phone number field' ] ,
        minlength : [10, 'enter a valid phone number contains a 10 number'] ,
        maxlength : 13
    },
    event_name : {
        type : String ,
        required : [true , 'please fill the event name field']
    },
    event_loc : {
        type : String ,
        required : [true , 'please fill the event location field']
    },
    event_time : {
        type : String ,
        required : [true , 'please fill the event time field']
    },
    event_date : {
        type : String ,
        required : [true , 'please fill the event date field']
    },
    event_desc : {
        type : String ,
        required : [true , 'please fill the event description field']
    }
})


const Organizer = mongoose.model('organizers' , organizerSchema)

module.exports = Organizer