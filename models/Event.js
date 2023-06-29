const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title:{
        type:String,
        maxLength:100
    },
    description:{
        type:String,
        maxLength:300,
        minLength:30
    },
    photo:{
        type:String,
    }
})

module.exports = mongoose.model("Event", eventSchema);