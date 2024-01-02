import './styles/Leaderboard.css';

const Leaderboard = ({ scores, leaderboardVisibility }) => {
  const scoresArray = scores.scores || [];

  const sortedScores = scoresArray.sort((a, b) => b.score - a.score);

  const topTen = sortedScores.slice(0, 10);
  const bottomTen = []

  if (sortedScores.length > 10) {
    bottomTen = sortedScores.slice(-10);
  }

  return (
    <div className='leaderboard'>
      <div className="leaderboard_content">
        <button className="leaderboard_close" onClick={() => leaderboardVisibility()}>X</button>
        <h2 className="leaderboard_title">Leaderboard</h2>
        <div className="scores_container">
          <div className="top_ten">
            {topTen.map(({ name, score }, index) => (
              <div className="score" key={index}>
                <div className='number'>{index + 1}</div>
                <div className="name_and_time">
                  <div className='name'>{name}</div>
                  <div className="time">{score}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="bottom_ten">
            {bottomTen.map(({ name, score }, index) => (
              <div className="score" key={index}>
                <div className='number'>{index + 11}</div>
                <div className="name_and_time">
                  <div className='name'>{name}</div>
                  <div className="time">{score}</div>
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
