const express = require("express");
const app = express();
const Contact = require("../models/contact");

app.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Create a new contact instance
  const newContact = new Contact({
    name,
    email,
    message,
  });

  // Save the contact to the database
  newContact.save()
    .then(() => {
      return res.status(200).send('Contact form data saved to database');
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send('Error saving contact form data to database');
    });
});

module.exports = app;