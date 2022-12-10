import React, { useEffect, useState } from 'react';
import DisplayList from './DisplayList';

const Game = (props) => {
  const { score, order, addStage } = props;
  const { currentScore } = score;
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

    const LIMIT = 15;
    const offset = Math.floor(Math.random() * 151 + 1 - LIMIT);

    if (
      (currentScore % LIMIT === 0 && currentScore !== 0) ||
      currentScore === 0
    ) {
      // initialize or when stage is passed fetch new pokemon
      setPokemonList([]);

      if (currentScore % LIMIT === 0 && currentScore !== 0) {
        // only when stage is passed add stage & fetch new pokemon
        addStage();
      }

      fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}&offset=${offset}`
      )
        .then((response) => response.json())
        .then((allpokemon) => {
          allpokemon.results.forEach((pokemon) => {
            fetchPokemonData(pokemon);
          });
        });
    }

    return () => {};
  }, [currentScore]);

  if (pokemonList.length === 0) return <div>Loading...</div>;

  if (pokemonList)
    return (
      <div className='game'>
        <DisplayList pokemonList={pokemonList} score={score} order={order} />
      </div>
    );
};

export default Game;
