const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
  timestamp: Number,
  coords: {
    latitude: Number,
    longitude: Number,
    altitude: Number,
    accuracy: Number,
    heading: Number,
    speed: Number,
  },
});

const trackSchema = new mongoose.Schema({
  userId: {
    // indicate type of reference to some other object inside on MongoDB
    type: mongoose.Schema.Types.ObjectId,
    // point to instance of User
    ref: "User",
  },
  name: {
    type: String,
    default: "",
  },
  locations: [pointSchema],
});

mongoose.model("Track", trackSchema);
