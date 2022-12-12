import React from 'react';

import sparkle from '../assets/sparkle.gif';

const Card = ({ clickPokemon, object, score }) => {
  const handleScore = () => {
    if (!object.clicked) {
      score.addCurrentScore();
      clickPokemon(object.id);
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
      {object.shiny && <img className='shiny' alt='shiny' src={sparkle} />}
    </div>
  );
};

export default Card;
