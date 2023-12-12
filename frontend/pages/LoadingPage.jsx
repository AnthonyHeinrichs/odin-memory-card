import './styles/LoadingPage.css';
import benderLoading from '/bender-loading.gif';

function LoadingPage() {
  return (
    <div className="loading_container">
      <img src={benderLoading} alt="bender turtle" />
      <div className="loading_title">
        <p className='load_text'>Loading</p>
        <p className='load_dot'>.</p>
        <p className='load_dot'>.</p>
        <p className='load_dot'>.</p>
      </div>
    </div>
  );
}

export default LoadingPage;