import './styles/CharacterCard.css';

const CharacterCard = ({characterName, characterImage, onClick}) => {
  return (
    <div className="card_container">
      <div className="character_container" onClick={onClick}>
        <p className="character_name">{characterName}</p>
        <img className="character_image" src={characterImage} alt="characterName" />
        <p className="character_quote">"People said I was dumb, but I proved them."</p>
      </div>
    </div>
  )
}

export default CharacterCard