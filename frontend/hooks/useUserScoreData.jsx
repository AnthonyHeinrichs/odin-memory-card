import { useState, useEffect } from 'react';

const useUserScoreData = () => {
  const [data, setData] = useState([]);

  //Bring in API key
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('https://odin-memory-card-backend-2w5khurw3-anthonyheinrichs.vercel.app/api/leaderboard/scores', {
          headers: {
            'X-API-Key': apiKey,
          },
        });
        const json = await resp.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching highscore data:', error);
      }
    };

    fetchData();
  }, [apiKey]);

  return data;
}

export default useUserScoreData;
