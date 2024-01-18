const express = require("express");
var mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const mongoURI =
  "mongodb+srv://acruz:tdoUm1ijs9XvBbfT@cluster0.a7izvec.mongodb.net/robert-and-raissa?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Database Connected");
  })
  .catch(() => {
    console.log("Error connecting to Mongo");
  });

app.listen(3000, function checkDB(port) {
  if (port) {
    console.log(port);
  } else {
    console.log("Port Successfully Connected.");
  }
});

app.use(cors());
app.use(express.json());
