import './styles/ResultPage.css';
import futuramaGameBackground from '/futurama-game-background.webm';
import Leaderboard from '../components/Leaderboard';

function ResultPage({result}) {
  return ( 
    <>
      <div className="loser_text_container">
        <h1>You {result === 'winner'  ? 'win' : 'lose'}!</h1>
      </div>
      <video className='background_video' autoPlay loop muted>
        <source src={futuramaGameBackground} type='video/mp4' />
      </video>
      <Leaderboard />
    </>
  );
}

export default ResultPage
