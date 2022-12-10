import React, { useState, useEffect } from 'react';

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
    <div key={object.id} style={styles} onClick={handleScore}>
      <img src={object.img_url} alt={object.name} />
      <div>{object.name}</div>
    </div>
  );
};

export default Card;
