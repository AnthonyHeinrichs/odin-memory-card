import { useState, useEffect, useCallback } from 'react';
import './styles/GamePage.css';
import CharacterCard from '../components/CharacterCard';
import ResultPage from './ResultPage';

const GamePage = ({ characters, wins, addWin, handleGoBack }) => {
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [userResult, setUserResult] = useState('');
  const [mixing, setMixing] = useState(false);

  // Shuffling the characters array passed
  const shuffle = useCallback((array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }, []);

  // Setting initial load
  useEffect(() => {
    shuffle(characters);
    
    setTimeout(() => {
      setMixing(false);
    }, 500);

    if (selectedCharacters.length === characters.length) {
      setUserResult('winner');
      if (selectedCharacters.length === 12 ) {
        addWin(true);
      }
    }
  }, [selectedCharacters, characters, shuffle]);

  // Handling our user click and checking if the user lost, updating our selected array
  const handleCharacterClick = (characterId) => {
    setMixing(true);

    setSelectedCharacters((prevSelected) => {
      if (prevSelected.includes(characterId)) {
        
        if (characters.length === 12 ) {
          addWin(false);
        }

        setUserResult('loser');
        setSelectedCharacters([]);
        return;
      } else {
        return [...prevSelected, characterId];
      }
    });
  };

  // Returning results page if user wins or loses
  if (userResult === 'loser' || userResult === 'winner') {
    return <ResultPage result={userResult} wins={wins} handleGoBack={handleGoBack} />;
  }

  return (
    <>
      <div className="wins_container">
        <p className="game_wins" >Hard win streak: {wins}</p>
      </div>
      <div className='cards_container'>
        <div className='cards'>
          {characters.map((character) => (
            <div key={character.id} className={`card_flip_container ${mixing ? 'mixing' : ''}`}>
              <CharacterCard
                key={character.id}
                characterName={
                  character.name.last ? character.name.last : character.name.first
                }
                characterImage={character.images.main}
                cardFlipped={mixing}
                onClick={() => handleCharacterClick(character.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GamePage;
