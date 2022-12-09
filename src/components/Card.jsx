import React from 'react';

const Card = (props) => {
  const { object, score } = props;

  const handleScore = () => {
    score.addCurrentScore();
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
