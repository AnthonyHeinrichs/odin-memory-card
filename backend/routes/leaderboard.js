const { Router } = require('express');
const Score = require('../models/score');
const router = Router();

// Provide option to read from .env file
require('dotenv').config()

const API_KEY = process.env.API_KEY;

// Middleware to verify API key
const verifyApiKey = (req, res, next) => {
  const apiKey = req.header('X-API-Key');

  if (!apiKey || apiKey !== API_KEY) {
    return res.status(403).json({ error: 'Forbidden - Invalid API key' });
  }

  next();
};

router.post('/scores', verifyApiKey, async (req, res) => {
  try {
    const { name, score } = req.body;

    const newScore = new Score({
      name,
      score,
    });

    await newScore.save();

    res.status(201).json({ message: 'Score added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/scores', verifyApiKey, async (req, res) => {
  try {
    const scores = await Score.find({}, { _id: 0, __v: 0 });

    res.json({ scores });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
