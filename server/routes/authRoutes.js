// routes/admin.js
const express = require('express');
// const router = express.Router();
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');
const app = express()

// Route to authenticate admin
app.post('/', async (req, res) => {
  try {
    const {
      username,
      password,
      // email,
    } = req.body;
    // Find admin account with username
    const admin = await Admin.findOne({
      username
    });
    if (!admin) {
      return res.status(401).json({
        message: 'Incorrect username.'
        // message: 'Incorrect email.'
      });
    }

    // Compare password with hashed password in database
    // const passwordMatch = (password === admin.password);
    if (!(password === admin.password)) {
      return res.status(401).json({ message: 'Incorrect password.' });
    }

    // Generate JWT and send to client
    const token = jwt.sign({ id: admin._id }, "workplease");
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

module.exports = app;
