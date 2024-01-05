const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const port = 5000;
const path = require('path');
const routes = require('./routes/server');

// Provide option to read from .env file
require('dotenv').config()

const app = express();

// Setup public path
app.use(express.static(path.join(__dirname, 'public')));

// Enable CORS for all routes
app.use(cors());

// Bringing in route(s)
app.use('/api/leaderboard', routes.leaderboard);
app.use('/api/characters', routes.characters);

// Set up mongoose connection
const mongoDb = process.env.MONGODB_URI;
mongoose.connect(mongoDb);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongo connection error'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
