import React, { useState, useEffect } from 'react';

import sparkle from '../assets/sparkle.gif';

const Card = (props) => {
  const { clickPokemon, object, score } = props;
  const { currentScore } = score;

  useEffect(() => {
    // handle initialize & score resets
    if (currentScore === 0) {
      object.clicked = false;
    }
  }, [currentScore]);

  const handleScore = () => {
    if (!object.clicked) {
      score.addCurrentScore();
      clickPokemon(object.id);

      object.clicked = true;
    } else {
      score.resetScore();
    }
  };

  const styles = {
    order: object.order,
  };

  return (
    <div className='card' key={object.id} style={styles} onClick={handleScore}>
      <img className='card-image' src={object.img_url} alt={object.name} />
      <div className='card-name'>{object.name}</div>
      {object.shiny && <img className='shiny' src={sparkle} />}
    </div>
  );
};

export default Card;
