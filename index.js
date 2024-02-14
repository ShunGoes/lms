const express  =  require('express');
const app= express();

const mongoose = require('mongoose')
const cors = require('cors') ;
const bodyParser = require('body-parser') 

const dotenv = require('dotenv') 
const AuthRoute = require("./routes/Auth.js");
const UserRoute =  require("./routes/Users.js");
const VideoRoute = require("./routes/Video.js");

dotenv.config();
app.use(express.json());
app.use(cors());


mongoose.connect('mongodb://localhost/location' ,   /* process.env.MONGO_URL, */ {useNewUrlParser: true,
 
 }).then(console.log("connected to mongo db")).catch((err) => console.log(err)); 



 app.use(bodyParser.json());

 app.use("/api/auth", AuthRoute);
 app.use("/api/users", UserRoute);
 app.use("/api/video", VideoRoute);
 app.listen(process.env.PORT  || 5000, ()=> {
    console.log("tobi is king");
})
