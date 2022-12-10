import React, { useState, useEffect } from 'react';

const Card = (props) => {
  const { object, score } = props;
  const { currentScore } = score;

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // handle initialize & score resets
    if (currentScore === 0) {
      setClicked(false);
    }
  }, [currentScore]);

  const handleScore = () => {
    if (!clicked) {
      score.addCurrentScore();
      setClicked(true);
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

      {/* remove after */}

      {clicked && <div>Clicked</div>}
    </div>
  );
};

export default Card;
