const router= require('express').Router();


const handle = require("../controllers/index");

router.post('/register', handle.register);

router.post("/login", handle.login);


module.exports = router;