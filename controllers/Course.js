
const User = require("../model/User.js");
const mongoose =require("mongoose")
const Course = require("../model/Course.js")


exports.getAllCourses = async(req, res) => {
    try {
const allCourses = await Course.find();
       
res.status(201).json(allCourses);

    }
    catch(err) {
        res.status(500).json(err)

    }
}

exports.getACourse = async(req, res) => {
    const courseID = req.body.id;
    try {
const myCourse = await Course.find(courseID);
       
res.status(201).json(myCourse);

    }
    catch(err) {
        res.status(500).json(err)

    }
}


exports.createCourse = async(req, res) => {
    try {
const newCourse = await Course.create(req.body);
       
res.status(201).json(newCourse);

    }
    catch(err) {
        res.status(500).json(err)

    }
}


exports.updateACourse = async(req, res) => {
    try {
        const myCourse = await Course.findById(req.params.id);
        if(myCourse) {

            try {
                const updatedCourse = await Course.findByIdAndUpdate( req.params.id, {
                $set:req.body
            }, {new : true});
    res.status(200).json(updatedCourse);
            } catch (err) {
                res.status(500).json(err)
            }


        } else {
            res.status(401).json("You can only update your course")
        }
        
    } catch (err) {
        res.status(500).json(err)

    }

}
exports.deleteACourse = async(req, res) => {
    const courseID = req.body.id
    try {
const courseDeleted = await Course.findByIdAndDelete(courseID);
       
res.status(201).json(allCourses);

    }
    catch(err) {
        res.status(500).json(err)

    }
}



