const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNo: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  dietaryRestrictions: String,
  plusOne: String,
  p1FirstName: String,
  p1LastName: String,
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
