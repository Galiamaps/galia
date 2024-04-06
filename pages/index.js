import React from "react";
import HeadComponent from '../components/Head';

// Constants
const TWITTER_HANDLE = "web3dev_";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  
  
  return (
    <div className="App">
      <HeadComponent/>
      <div className="container">
        <header className="header-container">
          <p className="header"> Galia o inicio da sua aventura espacial </p>
          <p className="sub-text"> Sua jornada neste universo de conhecimentos será incrível </p>
        </header>

        <main>
          <img className='gif-image' src="https://drive.google.com/file/d/10vlAxBAXEnkownJdby9v0hEtr8Zf-TAp/view" alt="emoji" />
        </main>

        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`contruido na @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
