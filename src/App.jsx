import './App.css';
import React, { useState } from 'react';

import Scoreboard from './components/Scoreboard';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className='App'>
      <Scoreboard currentScore={currentScore} highScore={highScore} />
    </div>
  );
}

export default App;
