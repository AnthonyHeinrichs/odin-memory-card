import './styles/ResultPage.css';
import futuramaGameBackground from '/futurama-game-background.webm';
import Leaderboard from '../components/Leaderboard';

function ResultPage({result, timeTaken}) {
  if (result === 'loser') {
    return ( 
      <>
        <div className="loser_text_container">
          <h1>You lose!</h1>
        </div>
        <video className='background_video' autoPlay loop muted>
          <source src={futuramaGameBackground} type='video/mp4' />
        </video>
        <Leaderboard />
      </>
    );
  }

  return (
    <>
      <div className="winner_text_container">
        <h1>You Win!</h1>
        <h2>It took you {timeTaken} seconds</h2>
      </div>
      <video className='background_video' autoPlay loop muted>
        <source src={futuramaGameBackground} type='video/mp4' />
      </video>
      <Leaderboard />
    </>
  );
}

export default ResultPage
