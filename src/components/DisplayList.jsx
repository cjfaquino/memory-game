import React from 'react';
import Card from './Card';

const DisplayList = (props) => {
  const { pokemonList, score, order } = props;

  return pokemonList.map((pokemon, index) => {
    const newObj = {
      ...pokemon,
      img_url: pokemon.sprites.front_default,
      order: order[index],
    };
    return <Card object={newObj} score={score} />;
  });
};

export default DisplayList;
