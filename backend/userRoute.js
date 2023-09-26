const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

require('dotenv').config({path : './.env'})

const router = express.Router()

const User = require('../MODELS/userModel')








router.post('/register' , async (req , res) => {
    const {username , email , password , password2} = req.body

    try {
        let user = await User.findOne({email})

        if(user) {
            res.status(400).json({msg : "user already register"})
            return ;
        }

        if(password.length < 8 || password2.length < 8){
            res.status(401).json({msg : "Enter at least 8 digits"})
            return;
        }

        if(password !== password2){
            res.status(401).json({msg : "password not match"})
            return;
        }


        
       
        user = new User({
            username ,
            email ,
            password
        })

     
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(user.password , salt)

        user.password = hashedPassword


        await user.save()

        res.json({userID : user._id})

    } catch (error) {
        res.status(400).json(error)
    }
})





router.post("/login" , async (req , res) => {
    const {email , password} = req.body

    try {
        const user = await User.findOne({email})

        if(!user) {
            res.status(400).json({msg : "Email not exist , go and sign up" , status : false})
            return;
        }

        const passwordMatch = await bcrypt.compare(password , user.password)

        if(!passwordMatch) {
            res.status(400).json({msg : "Incorrect Password" , status : false})
            return;
        }

        const token = jwt.sign({id : user._id} , process.env.PRIVATE_TOKEN_KEY)

        res.json({token , userID : user._id})


    } catch (error) {
        console.error(error)
    }
})





// user forget password route 
router.post('/forget-password' , async (req , res , next) => {
    const {email} = req.body

    try {
        let user = await User.findOne({email})

        if(!user) {
            res.status(400).json({msg : "email not exist , enter a valid one"})
            return;
        }

        // create a one time link for password reset , token
        const payLoadObj = {email : user.email , id : user._id}

        const token = jwt.sign( payLoadObj , process.env.PRIVATE_TOKEN_KEY )

        //create the link
        // const LINK = `http://localhost:3001/user/reset-password/${user._id}/${token}`


        // res.cookie("token_cookie" , token , {maxAge : 1000 * 60 * 60 *24})

        res.json({token : token  , userID : user._id })


    } catch (error) {
        console.error(error)
    }
})




// router.get('/reset-password/:userID/:token' , async (req , res , next) => {
//    const {userID , token} = req.params 

//    try {
//         let user = await User.findById(userID)

//         if(!user) {
//             res.status(400).json({msg : 'user with given id not exist'})
//             return;
//         }

//         const secret = process.env.PRIVATE_TOKEN_KEY + user.password
//         const payLoadObj = jwt.verify(token , secret , (err , decodedToken) => {
//             if(decodedToken){
//                 res.redirect('/user/reset-password')
//                 res.json({email : user.email})
//             }else{
//                 console.error(err)
//             }
//         })




//    } catch (error) {
//     console.error(error)
//    }
// })





router.post('/reset-password' , async (req , res , next) => {
    const {passwordOne , passwordTwo} = req.body

    try {
        
        let token = req.headers.token_value

        if(!token) {
            res.status(400).json({msg : "token not found"})
            return;
        }

        console.log(token)

        let user = await User.findById(token)

        if(passwordOne !== passwordTwo){
            res.status(400).json({msg : "reset password not match"})
            return;
        }

        user.password = passwordOne

        await user.save()

        console.log("password changed")

        next()



        // const payLoadObj = jwt.verify(userTokenFromEmail , process.env.PRIVATE_TOKEN_KEY , async (err , decodedToken) => {
        //     if(err){
        //         res.status(400).json({msg : 'Invalid token value'})
        //         return;
        //     }else{
        //         let userEmail = decodedToken.email
        //         let user = await User.findOne(userEmail)

        //         if(passwordOne != passwordTwo) {
        //             res.status(400).json({msg : "reset password not match"})
        //             return ;
        //         }

        //         user.password = passwordOne

        //         await user.save()

        //         res.redirect('/user/login')
            // }
        // })
    } catch (error) {
        console.error(error)
    }
})





router.delete("/remove/bookedEvent/:userID/:eventID" , async (req , res) => {
  
    const userID = req.params.userID
    const eventID = req.params.eventID
    const user = await User.findById(userID)
  
    try {
        console.log("user" , user)
        const index0fBookedEvent = user.bookedEvents.find(b => {
            return b == eventID
        }) 

       user.bookedEvents.splice(index0fBookedEvent , 1)

       await user.save()

       res.json({bookedEvents : user.bookedEvents , status : true})
     
    } catch (error) {
      res.json({msg : error})  
    }
  })






module.exports = router