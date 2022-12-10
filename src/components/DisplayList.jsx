import React, { useEffect } from 'react';
import Card from './Card';

const DisplayList = (props) => {
  const { pokemonList, clickPokemon, score, order } = props;

  return pokemonList.map((obj, index) => {
    const { pokeData, clicked } = obj;
    const newObj = {
      ...pokeData,
      img_url: pokeData.sprites.front_default,
      order: order[index],
      clicked,
    };
    return <Card clickPokemon={clickPokemon} object={newObj} score={score} />;
  });
};

export default DisplayList;
