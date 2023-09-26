const jwt = require('jsonwebtoken')
require('dotenv').config()

const userAuth = (req , res , next) => {
    // get the token from the header of the req 
    const token = req.headers.authorized 
    // if there is a token we must verify it to get what inside the payload obj
    if(token) {
        jwt.verify(token , process.env.PRIVATE_TOKEN_KEY , (err , decodedToken) => {
            if(err) return res.status(403)
            next()
        })
    }else{
        res.status(401) // user not authorized
    }
}


module.exports = userAuth