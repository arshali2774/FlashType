import React from 'react';
import TestLetter from '../TestLetter/TestLetter';
import './RealChallenge.css';

const RealChallenge = ({
  timeRemaining,
  timerStarted,
  testInfo,
  onInputChange,
}) => {
  return (
    <div className="typing-challenge">
      <div className="timer-container">
        <p className="timer">
          00:
          {timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}
        </p>
        <p className="timer-info">
          {!timerStarted && 'Start typing to start the test...'}
        </p>
      </div>
      <div className="text-area-container">
        <div className="text-area-left">
          <div className="text-area test-para">
            {testInfo.map((letter, idx) => {
              return <TestLetter key={idx} letter={letter} />;
            })}
          </div>
        </div>
        <div className="text-area-right">
          <textarea
            onChange={(e) => onInputChange(e.target.value)}
            placeholder="Start typing here..."
            className="text-area"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default RealChallenge;
