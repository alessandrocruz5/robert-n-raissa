const express = require("express");
var mongoose = require("mongoose");
const Schema = mongoose.Schema;
const router = express.Router();
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const CONNECTION_STRING =
  "mongodb+srv://acruz:tdoUm1ijs9XvBbfT@cluster0.a7izvec.mongodb.net/robert-and-raissa?retryWrites=true&w=majority";
const PORT = process.env.PORT || 1217;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

mongoose.connect(CONNECTION_STRING);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

const rsvpSchema = new Schema({
  firstName: String,
  lastName: String,
  phoneNo: Number,
  email: String,
  address: String,
  dietaryRestrictions: String,
  plusOne: Boolean,
  p1FirstName: String,
  p1LastName: String,
  attending: String,
});

app.use("/api", require("./routes/routes"));
