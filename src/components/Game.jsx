import React, { useEffect, useState } from 'react';
import DisplayList from './DisplayList';

const Game = (props) => {
  const { score, order } = props;
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonData = (pokemon) => {
      let url = pokemon.url;
      fetch(url)
        .then((response) => response.json())
        .then((pokeData) => {
          setPokemonList((state) => [...state, pokeData]);
        });
    };

    const limit = 10;
    const offset = 0;

    if (pokemonList.length === 0) {
      fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
      )
        .then((response) => response.json())
        .then((allpokemon) => {
          allpokemon.results.forEach((pokemon) => {
            fetchPokemonData(pokemon);
          });
        });
    }

    return () => {};
  }, []);

  if (pokemonList.length === 0) return <div>Loading...</div>;

  if (pokemonList)
    return (
      <div className='game'>
        <DisplayList pokemonList={pokemonList} score={score} order={order} />
      </div>
    );
};

export default Game;
