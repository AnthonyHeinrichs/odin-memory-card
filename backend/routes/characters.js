const { Router } = require('express');
const charactersData = require('../data/charactersData');

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

router.get('/', verifyApiKey, async (req, res) => {
  try {
    res.json(charactersData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
