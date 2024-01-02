import { useState } from 'react';
import FuturamaIcon from '/icon.png';
import Leaderboard from './Leaderboard';
import './styles/Navbar.css';

function Navbar({ wins, handleGoBack, scores }) {
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const leaderboardVisbility = () => {
    setShowLeaderboard(prevState => !prevState);
  }

  return (
    <div className="navbar_container">
      <img onClick={handleGoBack} className="futurama_icon" src={FuturamaIcon} alt="icon" />
      <div>
        <p className="game_wins" >Hard win streak: {wins}</p>
        <button onClick={leaderboardVisbility}>Leaderboard</button>
      </div>
      { showLeaderboard &&  <Leaderboard scores={scores} /> }
    </div>
  );
}

export default Navbar;