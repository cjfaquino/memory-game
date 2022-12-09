import './App.css';
import React, { useState, useEffect } from 'react';

import Scoreboard from './components/Scoreboard';
import Game from './components/Game';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className='App'>
      <Scoreboard currentScore={currentScore} highScore={highScore} />
      <Game />
    </div>
  );
}

export default App;
