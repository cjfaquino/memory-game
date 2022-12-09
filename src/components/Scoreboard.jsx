import React from 'react';

const Scoreboard = (props) => {
  const { highScore, currentScore } = props;
  return (
    <div className='scoreboard'>
      <div>Scoreboard</div>
      <div>Current score: {currentScore}</div>
      <div>High score: {highScore}</div>
    </div>
  );
};

export default Scoreboard;
