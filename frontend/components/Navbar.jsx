import { useState } from 'react';
import FuturamaIcon from '/icon.png';
import Leaderboard from './Leaderboard';
import './styles/Navbar.css';

function Navbar({ wins, handleGoBack, scores }) {
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const leaderboardVisibility = () => {
    setShowLeaderboard(prevState => !prevState);
  }

  return (
    <div className='nav_container'>
      <img onClick={handleGoBack} className='futurama_icon' src={FuturamaIcon} alt='icon' />
      <p className='game_wins' >Hard win streak: {wins}</p>
      <button onClick={() => leaderboardVisibility()} className='leaderboard_btn'>Leaderboard</button>
      { showLeaderboard &&  <Leaderboard scores={scores} leaderboardVisibility={leaderboardVisibility}/> }
    </div>
  );
}

export default Navbar;