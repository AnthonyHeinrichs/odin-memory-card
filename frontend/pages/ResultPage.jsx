import './styles/ResultPage.css';
import futuramaGameBackground from '/futurama-game-background.webm';

function ResultPage({result, handleGoBack}) {
  return ( 
    <>
      <div className="loser_text_container">
        <h1>You {result === 'winner'  ? 'win' : 'lose'}!</h1>
      </div>
      <video className='background_video' autoPlay loop muted>
        <source src={futuramaGameBackground} type='video/mp4' />
      </video>
      <div className="again_btn_container">
        <button onClick={handleGoBack} className="again_btn">Play again?</button>
      </div>
    </>
  );
}

export default ResultPage
