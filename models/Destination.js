const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter name"],
    maxLength: 50,
  },
  location: {
    type: String,
    required: [true, "Enter location"],
    maxLength: 50,
  },
  bestVisitingTime: {
    type: String,
    required: [true, "Enter best visiting time"],
    maxLength: 50,
  },
  expenditureDetails: {
    type: String,
    required: [true, "Enter expenditure"],
    maxLength: 50,
  },
  heritageSite: [
    {
      post: {
        type: String,
      },
      photo: {
        type: String,
        get: (v) => `${root}`,
      },
      description: {
        type: String,
      },
    },
  ],
  store: {
    type: String,
  },
});

module.exports = mongoose.model("Destination", destinationSchema);

// db.update({'Searching criteria goes here'},
// {
//  $push : {
//     trk :  {
//              "lat": 50.3293714,
//              "lng": 6.9389939
//            } //inserted data is the object to be inserted
//   }
// });
