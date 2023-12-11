// app.js
const express = require('express');
const cors = require('cors');
const port = 5000;

const app = express();

// Enable CORS for all routes
app.use(cors());

// Define a route
app.get('/api', (req, res) => {
  res.json({ "users": ["one", "two", "three"] });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});