import './styles/ResultPage.css';

function ResultPage({result, handleGoBack}) {
  return ( 
    <>
      <div className="loser_text_container">
        <h1>You {result === 'winner'  ? 'win' : 'lose'}!</h1>
      </div>
      <div className="again_btn_container">
        <button onClick={handleGoBack} className="again_btn">Play again?</button>
      </div>
    </>
  );
}

export default ResultPage
