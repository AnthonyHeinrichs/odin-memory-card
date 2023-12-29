import FuturamaIcon from '/icon.png';
import Leaderboard from './Leaderboard';
import './styles/Navbar.css';

function Navbar({ wins, handleGoBack, scores }) {
  return (
    <div className="navbar_container">
      <img onClick={handleGoBack} className="futurama_icon" src={FuturamaIcon} alt="icon" />
      <div>
        <p className="game_wins" >Hard win streak: {wins}</p>
        <button>Leaderboard</button>
      </div>
      <Leaderboard scores={scores} />
    </div>
  );
}

export default Navbar;