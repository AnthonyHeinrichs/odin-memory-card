import { useState } from 'react';
import './styles/Footer.css';
import UnsureFry from '/unsure_fry.png';

function Footer() {
  const [showHelp, setShowHelp] = useState(false);
  
  const year = new Date().getFullYear();

  const showInstructions = () => {
    setShowHelp((prevState) => !prevState);
  };

  return (
    <>
      <div className="footer_container">
        <div className={`help_box ${showHelp ? '' : 'hide'}`}>
          <div className="help_title">
            Instructions:
            <button className='close_btn' onClick={showInstructions}>Close</button>
          </div>
          <ul>
            <li><span className='bold'>Choose a difficulty level: </span>easy, medium, or hard.</li>
            <li><span className='bold'>How to play: </span>Click on each character, but be careful not to click on the same character twice.</li>
            <li>Click on the top left icon at any time to go back.</li>
          </ul>
        </div>
        <div className="help">
          <img className="help_img" src={UnsureFry} alt="help" onClick={showInstructions} />
          <div className="help_text">
            <p>Help please!</p>
          </div>
        </div>
      </div>
      <div className="copy_container">
        <p>Copyright © {year} Anthony Heinrichs</p>
          <a href="https://github.com/AnthonyHeinrichs" target="_blank">
          <img className="github" src="/github.svg" alt="github"></img>
        </a>
      </div>
    </>
  );
}

export default Footer;
