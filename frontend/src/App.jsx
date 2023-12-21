import { useState, useEffect } from 'react';
import './App.css';
import gameTitle from '/game-title.png';
import useUserScoreData from '../hooks/useUserScoreData';
import Navbar from '../components/Navbar';
import LoadingPage from '../pages/LoadingPage';
import GamePage from '../pages/GamePage';

function App() {
  // Grab our hard win numbers if they exist and update state
  const storedWins = JSON.parse(localStorage.getItem('wins'))

  const [originalCharacters, setOriginalCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hardWins, setHardWins] = useState(storedWins);
  const [gameStarted, setGameStarted] = useState(false);

  // Fetching our character data from a Futurama api
  const fetchFuturamaData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/futurama/characters');
      const json = await resp.json();
      setOriginalCharacters(json);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching Futurama data:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchFuturamaData();
  }, []);

  useEffect(() => {
    // Saving our wins to local storage in case user refreshes app
    localStorage.setItem('wins', JSON.stringify(hardWins))
  }, [hardWins])

  // Creating our character array depending on user difficulty selection argument
  const createCharacterArray = (difficultyAmount) => {
    const slicedCharacters = [...originalCharacters].slice(0, difficultyAmount);
    setCharacters(slicedCharacters);
  } 

  // Creating our character array and starting the game
  const handlePlayGame = (difficultyAmount) => {

    if (isLoading) {
      // Data is still loading, wait for it to finish
      return;
    }

    if (!originalCharacters.length) {
      // Fetch data if it hasn't been loaded yet
      fetchFuturamaData();
    } else {
      // Data is already available, create character array
      createCharacterArray(difficultyAmount);
      setGameStarted(true);
    }
    
  }

  const handleGoBack = () => {
    // Navigate back to the main page
    setGameStarted(false);
  };

  const addWin = (win) => {
    if (win) {
      setHardWins(prevWins => prevWins + 1);
    } else {
      setHardWins(0);
    }
    return
  }

  return (
    <div>
      {isLoading && (
        <LoadingPage />
      )}
      {!isLoading && (
        <>
          {!gameStarted && (
            <>
              <Navbar wins={hardWins}  handleGoBack={handleGoBack} />
              <div className="main_page">
                <img src={gameTitle} alt="futurama title" className='game_title_img'/>
                <h2 className='title_description'>Memory Game</h2>
                <div className='difficulty_selection_btns'>
                  <button className='difficulty_btn' onClick={() => handlePlayGame(4)}>Easy</button>
                  <button className='difficulty_btn' onClick={() => handlePlayGame(8)}>Medium</button>
                  <button className='difficulty_btn' onClick={() => handlePlayGame(12)}>Hard</button>
                </div>
              </div>
            </>
          )}
          {gameStarted && characters.length > 0 && (
            <>
              <Navbar wins={hardWins}  handleGoBack={handleGoBack} />
              <GamePage characters={characters} addWin={addWin} handleGoBack={handleGoBack}/>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
