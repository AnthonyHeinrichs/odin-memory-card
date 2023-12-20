import './styles/ResultPage.css';
import futuramaGameBackground from '/futurama-game-background.webm';
import Leaderboard from '../components/Leaderboard';

function ResultPage({result, wins, handleGoBack}) {
  return ( 
    <>
      <div className="loser_text_container">
        <h1>You {result === 'winner'  ? 'win' : 'lose'}!</h1>
        <p>Wins = {wins}</p>
      </div>
      <video className='background_video' autoPlay loop muted>
        <source src={futuramaGameBackground} type='video/mp4' />
      </video>
      <button onClick={handleGoBack}>Go back to Home</button>
      <Leaderboard />
    </>
  );
}

export default ResultPage
