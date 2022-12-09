import React from 'react';

const Card = (props) => {
  const { object } = props;

  const styles = {
    order: object.id,
  };

  return (
    <div key={object.id} style={styles}>
      <img src={object.img_url} alt={object.name} />
      <div>{object.name}</div>
    </div>
  );
};

export default Card;
