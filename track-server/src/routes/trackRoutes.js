const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Track = mongoose.model("Track");

const router = express.Router();

// all request handlers that are attached to this router will require user to be signed in
router.use(requireAuth);

router.get("/tracks", async (req, res) => {
  // get current user id
  // in requireAuth - we are getting user out of database and assigning to user property of req object
  const tracks = await Track.find({ userId: req.user._id });

  res.send(tracks);
});

module.exports = router;
