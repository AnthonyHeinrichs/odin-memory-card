import './styles/ScoreForm.css';

const ScoreForm = ({ formVisibility, wins }) => {

  return (
   <>
    <div className="modal_content">
      <div className="modal_header">
        <button className="close" onClick={ () => formVisibility()}>X</button>
      </div>
      <div className="modal_body">
        <p>Score form</p>
      </div>
    </div>
   </>
  );
}

export default ScoreForm;
