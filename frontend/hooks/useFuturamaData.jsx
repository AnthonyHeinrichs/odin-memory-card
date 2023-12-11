import { useState, useEffect } from "react";

const useFuturamaData = () => {
  const [data, setData] = useState([]);

  // Fetching api data and returning in JSON
  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch('https://api.sampleapis.com/futurama/characters');
        const json = await resp.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching Futurama data:', error);
      }
    };

    getData();
  }, []);

  return data;
}

export default useFuturamaData;
