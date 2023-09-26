const express = require('express')

const mongoose = require('mongoose')

const validator = require('validator')

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const cookieParser = require('cookie-parser')

const _ = require('lodash')

const cors = require('cors')


require('dotenv').config({path : './.env'})


const app = express() 







// middlewares , about req life-cycle


// to parse our req body into json obj req.body.keyname
app.use(express.json()) 

// to access key and value forms key&&value
// (e) e.target.name , e.target.value
app.use(express.urlencoded({extended : false}))


// to access our website from any network end point
app.use(cors())

// __dirname : root of the main folder 
app.use(express.static(__dirname + '/public'))


app.use(cookieParser())





// connect DB to the mongoDB compass
// useNewUrlParser : true to create a new index in the database , useUnifiedToplogy : true kind of sort
mongoose.connect(process.env.MONGO_URL_COMPASS , {useNewUrlParser : true , useUnifiedTopology : true})
    .then(console.log('JU DATABASE CONNECTED SUCCESSFULLY'))
    .catch((error) => console.log(error))





    const User = require('./MODELS/userModel')
    const Organizer = require('./MODELS/organizerModel')
    const Event = require('./MODELS/eventsModel')


    const userRouter = require('./ROUTES/userRoute')
    const organizerRouter = require('./ROUTES/organizerRoute')
    const eventsRouter = require('./ROUTES/eventsRoute')
    
    
    app.use('/user' , userRouter)
    app.use('/organizer' , organizerRouter)
    app.use('/events' , eventsRouter)
    
   // localhost:3001/user



    ////////////////////////////////////////////////////////////////////
    const AdminJS = require('adminjs')
    const AdminJSExpress = require('@adminjs/express')
    const {Database , Resource} = require("@admin-bro/mongoose")
   

    AdminJS.registerAdapter({
        Database ,
        Resource
    })


    
    const start = async () => {

    const admin = new AdminJS({
        resources : [
            User ,
            Organizer,
            Event
        ]
    })

   



  const adminRouter = AdminJSExpress.buildRouter(admin)

    app.use(admin.options.rootPath, adminRouter)

}

start()







const PORT = process.env.PORT || 3001

app.listen(PORT , () => {
    console.log(`server started on port ${PORT}`)
})





    
///////////////////////////////////////////////////////////////////////////////////








