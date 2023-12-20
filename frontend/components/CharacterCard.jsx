import React, { useEffect, useRef } from 'react';
import './styles/CharacterCard.css';

const CharacterCard = ({characterName, characterImage, cardFlipped, onClick}) => {
  let bounds;
  const inputRef = useRef();
  const glowRef = useRef();
  const rotateToMouse = (e) => {
    bounds = inputRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    inputRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 4}deg
      )
    `;
    glowRef.current.style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        #ffffff55,
        #0000000f
      )
    `;
  };
  
  const removeListener = (e) => {
    inputRef.current.style.transform = '';
    inputRef.current.style.background = '';
  };

  useEffect(() => {});
  return (
    <div className='card_perspective'>
      {cardFlipped ? (
        <div className="card card_back">
        </div>
      ) : (
        <div
          ref={inputRef}
          className="card card_front"
          onMouseLeave={removeListener}
          onMouseMove={rotateToMouse}
          onClick={() => onClick()}
        >
          <div className="character_container">
            <p className="character_name">{characterName}</p>
            <img className="character_image" src={characterImage} alt="characterName" />
            <p className="character_quote">"People said I was dumb, but I proved them."</p>
          </div>
          <div ref={glowRef} className="glow" />
        </div>
      )}
    </div>
  );
}

export default CharacterCard