const mongoose = require('mongoose')
const validator = require('validator')


const userSchema = new mongoose.Schema({
    username : {
        type : String ,
        required : [true , 'please fill the username field' ]
    },
    email : {
        type : String ,
        required : [true , 'please fill the email field' ],
        validate : [validator.isEmail , 'Invalid email structure']
    },
    password : {
        type : String , 
        required : [true , 'please fill the password field' ],
        minlength : [8 , "enter at least 8 digits"]
    },
    
    
    bookedEvents : [{
        // reference id
        type : mongoose.Schema.Types.ObjectId ,
        // ref : "events"
        // collection events
        ref : 'events'
    }]
})

// User is a class
const User = mongoose.model('users' , userSchema) // collection
// model = collection 


module.exports = User

