require("dotenv").config();
const express = require("express");
var cors = require("cors");
const config = require("./config/MongoDb");

const uploadRouter = require("./routes/upload_image");
const authRouter = require("./routes/auth");
const destinationRouter = require("./routes/destination");
const eventRouter = require("./routes/event")

const app = express();
app.use(express.json());

// permission for the user to use api in mobile devices
app.use(cors());

// connection of the data base using the mongoose
config.connectDataBase();

// router section
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/destination", destinationRouter);
app.use("/api/v1/event", eventRouter);

// Used to upload images

app.use("/api/v1/upload", uploadRouter, (req, res) => {
  res.sendStatus(401);
});

const Port = process.env.PORT || 5000;
app.listen(Port, () => {
  console.log("Port Has Been Started At " + process.env.PORT);
});
