import './App.css';
import React, { useState, useEffect } from 'react';

import Scoreboard from './components/Scoreboard';
import Game from './components/Game';
import shuffleArr from './components/utils/shuffleArr';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [order, setOrder] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const addCurrentScore = () => setCurrentScore(currentScore + 1);

  useEffect(() => {
    // randomize order when score updates
    setOrder(shuffleArr(order));
  }, [currentScore]);

  return (
    <div className='App'>
      <Scoreboard currentScore={currentScore} highScore={highScore} />
      <Game score={{ addCurrentScore }} order={order} />
    </div>
  );
}

export default App;
