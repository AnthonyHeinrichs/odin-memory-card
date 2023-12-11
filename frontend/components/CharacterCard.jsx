
const CharacterCard = ({characterName, characterImage, onClick}) => {
  return (
    <>
      <div className="character_container" onClick={onClick}>
        <img className="character_image" src={characterImage} alt="characterName" />
        <p className="character_name">{characterName}</p>
      </div>
    </>
  )
}

export default CharacterCard