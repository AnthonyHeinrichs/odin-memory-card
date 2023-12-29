// app.js
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const port = 5000;
const routes = require('./routes/server');

// Provide option to read from .env file
require('dotenv').config()

const app = express();

// Enable CORS for frontend testing
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200, 
};

app.use(cors(corsOptions));

// Bringing in route(s)
app.use('/api/leaderboard', routes);

// Set up mongoose connection
const mongoDb = process.env.MONGODB_URI;
mongoose.connect(mongoDb);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongo connection error'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
