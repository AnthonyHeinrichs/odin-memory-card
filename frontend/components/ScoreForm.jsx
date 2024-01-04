import { useState } from 'react';
import './styles/ScoreForm.css';

const ScoreForm = ({ formVisibility, wins, fetchLeaderboardData }) => {
  const [formData, setFormData] = useState({
    name: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiKey = import.meta.env.VITE_API_KEY;

    try {
      const response = await fetch('http://localhost:5000/api/leaderboard/scores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': apiKey,
        },
        body: JSON.stringify({
          name: formData.name,
          score: wins,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      fetchLeaderboardData(true);
      
    } catch (error) {
      console.error(error);
    }

    formVisibility();
  };

  return (
    <>
      <div className='form_content'>
        <div className='form_header'>
          <button className='form_close__btn' onClick={() => formVisibility()}>X</button>
        </div>
        <div className='form_body'>
          <h1>Submit your score ({wins}):</h1>
          <form onSubmit={handleSubmit}>
            <input
              className='form_name_input'
              type='text'
              id='name'
              name='name'
              placeholder='Your nickname...'
              value={formData.name}
              onChange={handleInputChange}
            />
            <button className='form_submit_btn' type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ScoreForm;
