// app.js
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const port = 5000;

// Bringing in model(s)
const Score = require("./models/score");

const app = express();

// Set up mongoose connection
const mongoDb = process.env.MONGODB_URI;
mongoose.connect(mongoDb);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongo connection error'));

// Enable CORS for all routes
app.use(cors());

// Define a route
app.get('/api', (req, res) => {
  res.json({ "users": ["one", "two", "three"] });
});

app.get('/api/leaderboard/scores', (req, res) => {
  res.json
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});