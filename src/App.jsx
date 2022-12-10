import './App.css';
import React, { useState, useEffect } from 'react';

import Scoreboard from './components/Scoreboard';
import Game from './components/Game';
import shuffleArr from './components/utils/shuffleArr';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [stage, setStage] = useState(1);
  const [order, setOrder] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);

  const addCurrentScore = () => setCurrentScore(currentScore + 1);

  const resetScore = () => {
    setStage(1);
    setCurrentScore(0);
  };

  const addStage = () => setStage(stage + 1);

  useEffect(() => {
    // randomize order when score updates
    setOrder(shuffleArr(order));

    // update high score
    if (highScore <= currentScore) {
      setHighScore(currentScore);
    }
  }, [currentScore]);

  return (
    <div className='App'>
      <Scoreboard
        currentScore={currentScore}
        highScore={highScore}
        stage={stage}
      />
      <Game
        score={{ addCurrentScore, resetScore, currentScore }}
        addStage={addStage}
        order={order}
      />
    </div>
  );
}

export default App;
