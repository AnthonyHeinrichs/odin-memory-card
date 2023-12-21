import { useState } from 'react';
import './styles/Footer.css';
import UnsureFry from '/unsure_fry.png';

function Footer() {
  const [showHelp, setShowHelp] = useState(false);

  const showInstructions = () => {
    setShowHelp(prevState => !prevState);
  }

  return (
    <div className="footer_container">
      {showHelp && (
        <div className='help_box'>
          <div className="help_title">
            Instructions:
          </div>
          <ul>
            <li>Goal: Click all the cards without clicking the same one twice.</li>
            <li>How to play: select a difficulty - easy has 12 cards, medium 8, and hard 12.</li>
            <li>Click on the top left icon at anytime to go back.</li>
          </ul>
        </div>
      )}
      <div className="help">
        <img className="help_img" src={UnsureFry} alt="help" onClick={showInstructions} />
        <div className="help_text">
          <p>Help please!</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;