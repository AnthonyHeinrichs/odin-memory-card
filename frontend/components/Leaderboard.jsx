import './styles/Leaderboard.css';

const Leaderboard = ({ scores, leaderboardVisibility }) => {
  let scoresArray = scores.scores || [];

  let sortedScores = scoresArray.sort((a, b) => b.score - a.score);

  let topFive = sortedScores.slice(0, 5);
  let bottomFive = []

  if (sortedScores.length > 5) {
    bottomFive = sortedScores.slice(-5);
  }

  return (
    <div className='leaderboard'>
      <div className='leaderboard_content'>
        <button className='leaderboard_close' onClick={() => leaderboardVisibility()}>X</button>
        <h2 className='leaderboard_title'>Leaderboard</h2>
        <p className='leaderboard_description'>(Highest winstreak while playing hard difficulty)</p>
        <div className='scores_container'>
          <div className='top_ten'>
            {topFive.map(({ name, score }, index) => (
              <div className='score' key={index}>
                <div className='number'>{index + 1}</div>
                <div className='name_and_time'>
                  <div className='name'>{name}</div>
                  <div className='time'>{score}</div>
                </div>
              </div>
            ))}
          </div>
          <div className='bottom_ten'>
            {bottomFive.map(({ name, score }, index) => (
              <div className='score' key={index}>
                <div className='number'>{index + 6}</div>
                <div className='name_and_time'>
                  <div className='name'>{name}</div>
                  <div className='time'>{score}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
