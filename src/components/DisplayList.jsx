import React from 'react';
import Card from './Card';

const DisplayList = (props) => {
  const { pokemonList } = props;

  return pokemonList.map((pokemon) => {
    const newObj = { ...pokemon, img_url: pokemon.sprites.front_default };
    return <Card object={newObj} />;
  });
};

export default DisplayList;
