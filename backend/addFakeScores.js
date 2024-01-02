// addFakeScores.js
const mongoose = require('mongoose');
const Score = require('./models/score');

// Provide option to read from .env file
require('dotenv').config();

// Set up mongoose connection
const mongoDb = process.env.MONGODB_URI;
mongoose.connect(mongoDb);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongo connection error'));

// Function to add fake scores
async function addFakeScores() {
  const fakeScores = [
    { name: 'Player1', score: 1 },
    { name: 'Player2', score: 2 },
    { name: 'Player3', score: 1 },
    { name: 'Player4', score: 3 },
    { name: 'Player5', score: 1 },
    { name: 'Player6', score: 1 },
    { name: 'Player7', score: 5 },
    { name: 'Player8', score: 1 },
    { name: 'Player9', score: 3 },
    { name: 'Player10', score: 8 },
    { name: 'Player11', score: 2 },
    { name: 'Player12', score: 7 },
    { name: 'Player13', score: 3 },
    { name: 'Player14', score: 5 },
  ];

  try {
    // Add each fake score to the database
    for (const scoreData of fakeScores) {
      const newScore = new Score(scoreData);
      await newScore.save();
      console.log(`Score added: ${JSON.stringify(scoreData)}`);
    }

    console.log('Fake scores added successfully!');
  } catch (error) {
    console.error('Error adding fake scores:', error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
}

// Run the function to add fake scores
addFakeScores();