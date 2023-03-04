import React from 'react';
import './TestLetter.css';

const TestLetter = ({ letter }) => {
  const { status } = letter;

  const statusClassName = {
    correct: 'test-letter-correct',
    incorrect: 'test-letter-incorrect',
    notAttempted: 'test-letter-not-attempted',
  }[status];

  return (
    <span className={`test-letter ${statusClassName}`}>
      {letter.testLetter}
    </span>
  );
};

export default TestLetter;
