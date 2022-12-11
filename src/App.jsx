import './App.css';
import React, { useState, useEffect } from 'react';

import Scoreboard from './components/Scoreboard';
import Game from './components/Game';
import shuffleArr from './components/utils/shuffleArr';

const orderArr = [...Array(5).keys()];

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [stage, setStage] = useState(1);
  const [order, setOrder] = useState(orderArr);

  const addCurrentScore = () => setCurrentScore(currentScore + 1);

  const resetScore = () => {
    setStage(1);
    setCurrentScore(0);
    setOrder(orderArr);
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

  useEffect(() => {
    // add more pokemon per stage
    const num = 5 * (stage + 1);
    setOrder([...Array(num).keys()]);
  }, [stage]);

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
};

export default App;
