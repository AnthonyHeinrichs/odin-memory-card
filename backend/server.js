// app.js
const express = require('express');
const app = express();
const port = 5000;

// Define a route
app.get('/api', (req, res) => {
  res.json({ "users": ["one", "two", "three"] });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});