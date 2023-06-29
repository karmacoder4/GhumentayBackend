require('dotenv').config();
const express =require("express");
var cors = require('cors');
const config = require('./config/MongoDb')
const cookieParser = require("cookie-parser");

const uploadRouter=require("./routes/upload_image")
const authRouter = require("./routes/auth");
const destinationRouter = require("./routes/destination");

const userRouter = require("./routes/user.js");

const app=express();

//middlewares...
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// permission for the user to use api in mobile devices
app.use(cors());

// connection of the data base using the mongoose
config.connectDataBase();


// router section 


app.use("/api/v1/auth", authRouter);
app.use("/api/v1/destination", destinationRouter);
app.use("/user", userRouter);
// Used to upload images 

app.use("/api/v1/upload", uploadRouter, (req, res) => {
  res.sendStatus(401);
})



const Port = process.env.PORT || 5000;
app.listen(Port, () => {
  
    console.log("Port Has Been Started At "+ process.env.PORT);
  });