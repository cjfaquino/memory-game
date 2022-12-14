import React from 'react';
import Card from './Card';

const DisplayList = ({ pokemonList, clickPokemon, score, order }) =>
  pokemonList.map((obj, index) => {
    const { pokeData, clicked, shiny } = obj;

    let iconURL = pokeData.sprites.front_default;
    if (shiny) {
      iconURL = pokeData.sprites.front_shiny;
    }

    const newObj = {
      ...pokeData,
      img_url: iconURL,
      order: order[index],
      clicked,
      shiny,
    };
    return (
      <Card
        key={crypto.randomUUID()}
        clickPokemon={clickPokemon}
        object={newObj}
        score={score}
      />
    );
  });

export default DisplayList;
