const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
username: {
    type: String,
    required: true
},
emailAddress: {
    type: String,
    required: true
},
password: {
    type: String,
    required: true
},
fullName: {
    type: String,
    required : true
},
location : {

    type: String
},
 isInstructor: {
    type: Boolean
},
isAdmin: {
    type: Boolean
},
courseEnrolled: {
    type: Array,
    default: []
},
})

module.exports = mongoose.model("User", UserSchema)