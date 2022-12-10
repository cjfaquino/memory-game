import React from 'react';

const Scoreboard = (props) => {
  const { highScore, currentScore, stage } = props;
  return (
    <div className='scoreboard sticky'>
      <div>Scoreboard</div>
      <div>Current score: {currentScore}</div>
      <div>High score: {highScore}</div>
      <div>Stage {stage}</div>
    </div>
  );
};

export default Scoreboard;
