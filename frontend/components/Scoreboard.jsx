import './styles/Scoreboard.css';

const Scoreboard = ({scores}) => {
  const testArray = ['anthony', 'serena', 'robert', 'gerald', 'anthony', 'serena', 'robert', 'gerald', 'anthony', 'serena', 'robert', 'serena', 'robert', 'gerald', 'anthony', 'serena', 'robert', 'gerald', 'anthony', 'serena']
  const topTen = testArray.slice(0, 10);
  const bottomTen = testArray.slice(10, 20);

  return (
    <>
      <h2 className="scoreboard_title">Scoreboard</h2>
      <div className="scoreboard">
        <div className="top_ten">
          {topTen.map((name, index) => {
             return (
              <div className="score" key={index}>
                <div className='number'>{index + 1}</div>
                <div>{name}</div>
              </div>
             )
          })}
        </div>
        <div className="bottom_ten">
          {bottomTen.map((name, index) => {
             return (
              <div className="score" key={index}>
                <div className='number'>{index + 11}</div>
                <div>{name}</div>
              </div>
             )
          })}
        </div>
      </div>
    </>
  );
}

export default Scoreboard