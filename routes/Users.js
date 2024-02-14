const router = require('express').Router();
const User = require("../model/User.js");




router.get("/allUsers", async(req, res)=> {
    try {
const users = await User.find();
res.status(200).json(users)
    } catch(err) {
res.status(500).json(err)
    }

    
});
I

module.exports = router ;