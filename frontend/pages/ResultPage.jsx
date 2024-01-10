import './styles/ResultPage.css';

function ResultPage({result, handleGoBack}) {
  return ( 
    <>
      <div className="results_text_container">
        <img className='results_gif' src={result === 'winner'  ? '/woo-hoo-fry.gif' : '/sad-fry.gif'} alt="results gif" />
        <h1>You {result === 'winner'  ? 'win' : 'lose'}!</h1>
      </div>
      <div className="again_btn_container">
        <button onClick={handleGoBack} className="again_btn">Play again?</button>
      </div>
    </>
  );
}

export default ResultPage
