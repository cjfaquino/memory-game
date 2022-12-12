import React from 'react';

const Scoreboard = ({ highScore, currentScore, stage }) => (
  <div className='scoreboard sticky'>
    <div>Scoreboard</div>
    <div>Current score: {currentScore}</div>
    <div>High score: {highScore}</div>
    <div>Stage {stage}</div>
  </div>
);

export default Scoreboard;
