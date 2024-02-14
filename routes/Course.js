const router= require('express').Router();


const handle = require("../controllers/index.js");

router.post('/createCourse', handle.createCourse);

router.put("/updateCourse", handle.updateACourse);

router.delete("/deleteCourse", handle.deleteACourse);
router.get("/getSIngleCourse", handle.getACourse);
router.get("/allCourses", handle.getAllCourses);

module.exports = router;