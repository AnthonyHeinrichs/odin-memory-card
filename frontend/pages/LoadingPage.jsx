import './styles/LoadingPage.css';
import benderLoading from '/bender-loading.gif';

function LoadingPage() {
  return (
    <div className="loading_container">
      <img src={benderLoading} alt="bender turtle" />
      <div className="loading_title">
        <p className='load_text'>Loading</p>
        <div className='load_dot'></div>
        <div className='load_dot'></div>
        <div className='load_dot'></div>
      </div>
    </div>
  );
}

export default LoadingPage;