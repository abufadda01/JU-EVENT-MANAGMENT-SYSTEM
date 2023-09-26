const express = require('express')

const router = express.Router()

const Organizer = require('../MODELS/organizerModel')





router.get('/' , async (req , res) => {
    res.send('organizer main page')
})



router.post('/' , async (req , res) => {
    const {org_email , org_phone_num , event_name , event_loc , event_time , event_date , event_desc} = req.body

    try {
        let organizer = new Organizer({
            org_email ,
            org_phone_num ,
            event_name ,
            event_loc ,
            event_time ,
            event_date ,
            event_desc
        })

        await organizer.save()

        res.send(organizer)

    } catch (error) {
        console.error(error)
    }
})




module.exports = router