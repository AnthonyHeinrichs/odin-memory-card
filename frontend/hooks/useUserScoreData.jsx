import { useState, useEffect } from 'react';

const useUserScoreData = () => {
  const [data, setData] = useState([]);

  // Fetching api data and returning in JSON
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('http://localhost:5000/api');
        const json = await resp.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching highscore data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  return data;
}

export default useUserScoreData;
