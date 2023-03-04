import React from 'react';
import './TryAgain.css';

const TryAgain = ({ words, characters, wpm, startAgain }) => {
  return (
    <div className="test-results">
      <h1>Test Results</h1>
      <div className="result-container">
        <p>
          <b>characters: </b> {characters}
        </p>
        <p>
          <b>words: </b> {words}
        </p>
        <p>
          <b>Speed: </b> {wpm}
          <span> wpm</span>
        </p>
      </div>
      <div>
        <button onClick={() => startAgain()} className="end-btn retry-btn">
          Re-try
        </button>
        <button
          className="end-btn share-btn"
          onClick={() => {
            window.open(
              'https://www.facebook.com/sharer/sharer.php?u=https://arshali2774.github.io/FlashType',
              'facebook-share-dialog',
              'width=800,height=600'
            );
          }}
        >
          Share
        </button>
        <button
          className="end-btn tweet-btn"
          onClick={() => {
            window.open(
              `https://twitter.com/intent/tweet?text=Typing speed = ${wpm}`,
              'Twitter',
              'width=800,height=600'
            );
          }}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TryAgain;
