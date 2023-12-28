import { Router } from 'express';

const router = Router();

router.post('/scores', async (req, res) => {
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

router.get('/scores', async (req, res) => {
  try {
    const scores = await Score.find({}, { _id: 0, __v: 0 });

    res.json({ scores });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;