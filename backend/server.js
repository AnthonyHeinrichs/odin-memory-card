// app.js
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const port = 5000;
import routes from './routes';

// Bringing in model(s)
const Score = require("./models/score");

// Provide option to read from .env file
require('dotenv').config()

const app = express();

// Bringing in route(s)
app.use('/api/leaderboard', routes.leaderboard);

// Set up mongoose connection
const mongoDb = process.env.MONGODB_URI;
mongoose.connect(mongoDb);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongo connection error'));

// Enable CORS for all routes
app.use(cors());

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});