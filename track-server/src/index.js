const express = require("express");

const app = express();

// function to run when a GET request is made to API
app.get("/", (req, res) => {
  res.send("hi there!");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
