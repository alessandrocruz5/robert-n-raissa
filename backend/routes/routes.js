const express = require("express");
const router = express.Router();
const Form = require("../model");

router.get("/forms", async (req, res) => {
  try {
    const forms = await Form.find();
    res.json(forms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/newForm", async (req, res) => {
  console.log(req.body);
  const form = new Form(req.body);

  try {
    const newForm = await form.save();
    res.status(201).json(newForm);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
