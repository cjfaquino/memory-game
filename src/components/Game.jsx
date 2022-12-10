import React, { useEffect, useState } from 'react';
import DisplayList from './DisplayList';

const Game = (props) => {
  const { score, order, addStage } = props;
  const { currentScore } = score;
  const [pokemonList, setPokemonList] = useState([]);

  const clickPokemon = (id) => {
    const newArr = pokemonList.map((obj) => {
      if (obj.pokeData.id === id) {
        obj.clicked = true;
      }
      return obj;
    });

    setPokemonList(newArr);
  };

  const checkAllClicked = () => {
    if (pokemonList.length !== 0) {
      return pokemonList.every((obj) => obj.clicked === true);
    }
    return false;
  };

  useEffect(() => {
    const fetchPokemonData = (pokemon) => {
      let url = pokemon.url;
      fetch(url)
        .then((response) => response.json())
        .then((pokeData) => {
          setPokemonList((state) => [...state, { pokeData, clicked: false }]);
        });
    };

    const limit = order.length;
    const offset = Math.floor(Math.random() * 151 + 1 - limit);

    if (checkAllClicked() || currentScore === 0) {
      // initialize or when stage is passed fetch new pokemon
      setPokemonList([]);

      if (checkAllClicked()) {
        addStage();
      }

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
  }, [currentScore]);

  if (pokemonList.length === 0) return <div>Loading...</div>;

  if (pokemonList)
    return (
      <div className='game'>
        <DisplayList
          pokemonList={pokemonList}
          clickPokemon={clickPokemon}
          score={score}
          order={order}
        />
      </div>
    );
};

export default Game;
