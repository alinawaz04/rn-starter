const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongoUri =
  "mongodb+srv://alihnawaz:passwordpassword@cluster0.pq56mw4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoUri);
mongoose.connection.on("connected", () => {
  console.log("connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.error("error connecting to mongo", err);
});

// function to run when a GET request is made to API
app.get("/", (req, res) => {
  res.send("hi there!");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
