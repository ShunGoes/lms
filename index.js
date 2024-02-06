const express = require("express");
const app= express();

const mongoose = require("mongoose")
const cors = require("cors");
const bodyParser = require("body-parser")

const dotenv = require("dotenv")
const AuthRoute = require("./routes/Auth");

dotenv.config();
app.use(express.json());
app.use(cors());


mongoose.connect('mongodb://localhost/locatio' ,   /* process.env.MONGO_URL, */ {useNewUrlParser: true,
 
 }).then(console.log("connected to mongo db")).catch((err) => console.log(err)); 



 app.use(bodyParser.json());

 app.use("/api/auth", AuthRoute);

 app.listen(process.env.PORT  || 5000, ()=> {
    console.log("tobi is king");
})
