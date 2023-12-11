import { useState, useEffect } from 'react';
import './App.css';
import futuramaBackground from '/futurama-background.webm'
import useFuturamaData from '../hooks/useFuturamaData';
import useUserScoreData from '../hooks/useUserScoreData';
import GamePage from '../pages/GamePage';

function App() {
  const [characters, setCharacters] = useState();
  const [userScores, setUserScores] = useState();
  const [gameStarted, setGameStarted] = useState(false);
  const characterData = useFuturamaData();
  const userData = useUserScoreData();

  // Fetching our character data from a Futurama api
  useEffect(() => {
    setCharacters(characterData);
    setUserScores(userData);
  }, [characterData]);

  // Creating our character array depending on user difficulty selection argument
  const createCharacterArray = (difficultyAmount) => {
    setCharacters(characterData.slice(0, difficultyAmount).map(character => character));
  } 

  // Creating our character array and starting the game
  const handlePlayGame = (difficultyAmount) => {
    createCharacterArray(difficultyAmount);
    setGameStarted(true);
  }

  return (
    <div>
      <h1 className='title'>ODIN MEMORY CARD</h1>
      <h2 className='title_description'>Inspired by Futurama</h2>
      {!gameStarted && (
        <>
          <button onClick={() => handlePlayGame(4)}>Easy</button>
          <button onClick={() => handlePlayGame(8)}>Medium</button>
          <button onClick={() => handlePlayGame(12)}>Hard</button>
          <video className='background_video' autoPlay loop muted>
            <source src={futuramaBackground} type='video/mp4' />
          </video>
        </>
      )}
      <div className="high_scores">
      </div>
      {gameStarted && characters.length > 0 && <GamePage characters={characters} />}
    </div>
  );
}

export default App
