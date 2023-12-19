import './styles/Leaderboard.css';

const Leaderboard = ({scores}) => {
  const testArray = ['anthony', 'serena', 'robert', 'gerald', 'anthony', 'serena', 'robert', 'gerald', 'anthony', 'serena', 'robert', 'serena', 'robert', 'gerald', 'anthony', 'serena', 'robert', 'gerald', 'anthony', 'serena']
  const topTen = testArray.slice(0, 10);
  const bottomTen = testArray.slice(10, 20);

  return (
    <div className='leaderboard'>
      <div className="leaderboard_content">
        <h2 className="leaderboard_title">Leaderboard</h2>
        <div className="scores_container">
          <div className="top_ten">
            {topTen.map((name, index) => {
              return (
                <div className="score" key={index}>
                  <div className='number'>{index + 1}</div>
                  <div className="name_and_time">
                    <div className='name'>{name}</div>
                    <div className="time">2.48s</div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="bottom_ten">
            {bottomTen.map((name, index) => {
              return (
                <div className="score" key={index}>
                  <div className='number'>{index + 11}</div>
                  <div className="name_and_time">
                    <div className='name'>{name}</div>
                    <div className="time">2.48s</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard