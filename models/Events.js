const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title:{
        type:String,
        maxLength:100
    },
    description:{
        type:String,
        maxLength:100,
        minLength:30
    },
    photo:{
        type:URL,
    }
})

module.exports = mongoose.model("Event", eventSchema);