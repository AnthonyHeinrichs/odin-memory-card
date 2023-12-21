import FuturamaIcon from '/icon.png';
import './styles/Navbar.css';

function Navbar({ wins, handleGoBack }) {
  return (
    <div className="navbar_container">
      <img onClick={handleGoBack} className="futurama_icon" src={FuturamaIcon} alt="icon" />
      <p className="game_wins" >Hard win streak: {wins}</p>
    </div>
  );
}

export default Navbar;