const express = require('express');
const session = require("express-session");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require("cors");

const authRouter = require('./routes/authRoutes.js');
const contactRouter = require('./routes/contactRoutes.js');
const photoRouter = require('./routes/photoRoutes.js');

// Connection with .env file (-important-)
require('dotenv').config();

const app = express();
app.use(cors());

app.use(
  session({
    secret: "This will be secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

// njohja e materialeve statike - imazheve
app.use(express.static("images"));
// limit i file-ve te upload-ur
app.use(express.json({ limit: "1000mb", extended: true }));
app.use(
  express.urlencoded({ limit: "1000mb", extended: true, parameterLimit: 500000 })
);
const PORT = process.env.PORT;

app.use(passport.initialize());



// Connection to the MongoDB database
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error : "));
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Successfully connected to MongoDB.');
  // Create initial admin account
  // Admin.createInitialAdmin();
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broken!');
});

// Routes
app.use("/api/login", authRouter);
app.use("/api/contact", contactRouter);
app.use("/api/photos", photoRouter);



// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// Create initial admin account
// Importing the Admin model
const Admin = require('./models/admin');
Admin.createInitialAdmin();