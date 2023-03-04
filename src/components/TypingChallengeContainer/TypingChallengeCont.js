import React from 'react';
import DetailsCards from '../DetailsCards/DetailsCards';
import RealChallenge from '../RealChallenge/RealChallenge';
import './TypingChallengeCont.css';

const TypingChallengeCont = ({
  selectedPara,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  testInfo,
  onInputChange,
}) => {
  return (
    <div className="typing-challenge-cont">
      {/**Details section */}
      <div className="details-cont">
        {/**Words typed */}
        <DetailsCards cardName="Words" cardValue={words} />
        {/**characters typed */}
        <DetailsCards cardName="Characters" cardValue={characters} />

        {/**speed typed */}
        <DetailsCards cardName="Speed" cardValue={wpm} />
      </div>

      {/**Real Challenge */}
      <div className="test-typewriter">
        <RealChallenge
          timeRemaining={timeRemaining}
          timerStarted={timerStarted}
          selectedPara={selectedPara}
          testInfo={testInfo}
          onInputChange={onInputChange}
        />
      </div>
    </div>
  );
};

export default TypingChallengeCont;
