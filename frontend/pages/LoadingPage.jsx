import './styles/LoadingPage.css';
import benderLoading from '/bender-loading.gif';

function LoadingPage() {
  return (
    <div className="loading_container">
      <img src={benderLoading} alt="bender turtle" />
      <p className='load_text'>Loading...</p>
    </div>
  );
}

export default LoadingPage;