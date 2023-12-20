import { useState, useEffect, useCallback } from 'react';
import './styles/GamePage.css';
import CharacterCard from '../components/CharacterCard';
import ResultPage from './ResultPage';

const GamePage = ({ characters }) => {
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [userResult, setUserResult] = useState('');
  const [startTime, setStartTime] = useState(null);
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

    if (!startTime) {
      setStartTime(Date.now());
    }

    if (selectedCharacters.length === characters.length) {
      setUserResult('winner');
    }
  }, [selectedCharacters, characters, shuffle, startTime]);

  // Formats our counter to 'seconds.milliseconds' and returns it
  const formatTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const remainingMilliseconds = milliseconds % 1000;

    return `${seconds}.${remainingMilliseconds}`;
  };

  // Handling our user click and checking if the user lost, updating our selected array
  const handleCharacterClick = (characterId) => {
    setMixing(true);

    setSelectedCharacters((prevSelected) => {
      if (prevSelected.includes(characterId)) {
        setUserResult('loser');
        setSelectedCharacters([]);
        return;
      } else {
        return [...prevSelected, characterId];
      }
    });
  };

  // Returning loser page if user lost
  if (userResult === 'loser') {
    return <ResultPage result={userResult} />;
  }

  // Returning our winner page if user own
  if (userResult === 'winner') {
    const endTime = Date.now();
    const timeTaken = endTime - startTime;
    const timeFormatted = formatTime(timeTaken);

    return <ResultPage result={userResult} timeTaken={timeFormatted} />
  }

  return (
    <div className='cards_container'>
      <div className='cards'>
        {characters.map((character) => (
          <div className={`card_flip_container ${mixing ? 'mixing' : ''}`}>
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
  );
};

export default GamePage;
