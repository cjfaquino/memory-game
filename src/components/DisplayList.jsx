import React, { useEffect } from 'react';
import Card from './Card';

const DisplayList = (props) => {
  const { pokemonList, clickPokemon, score, order } = props;

  return pokemonList.map((obj, index) => {
    const { pokeData, clicked, shiny } = obj;

    let icon_url;
    shiny
      ? (icon_url = pokeData.sprites.front_shiny)
      : (icon_url = pokeData.sprites.front_default);

    const newObj = {
      ...pokeData,
      img_url: icon_url,
      order: order[index],
      clicked,
    };
    return <Card clickPokemon={clickPokemon} object={newObj} score={score} />;
  });
};

export default DisplayList;
