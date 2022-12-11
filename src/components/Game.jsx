import React, { useEffect, useState } from 'react';
import DisplayList from './DisplayList';

const Game = (props) => {
  const { score, order, addStage } = props;
  const { currentScore } = score;
  const [pokemonList, setPokemonList] = useState([]);

  const shinyRoll = () => {
    const randomNum = Math.floor(Math.random() * 100 + 1);
    return randomNum < 5;
  };

  const fetchPokemonData = (pokemon) => {
    let url = pokemon.url;
    fetch(url)
      .then((response) => response.json())
      .then((pokeData) => {
        setPokemonList((state) => [
          ...state,
          { pokeData, clicked: false, shiny: shinyRoll() },
        ]);
      });
  };

  const fetchPokemon = (limit, offset) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
      .then((response) => response.json())
      .then((allpokemon) => {
        allpokemon.results.forEach((pokemon) => {
          fetchPokemonData(pokemon);
        });
      });
  };

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
    const limit = order.length;
    const offset = Math.floor(Math.random() * 151 + 1 - limit);
    if (checkAllClicked() || currentScore === 0) {
      setPokemonList([]);
      fetchPokemon(limit, offset);
    }

    if (checkAllClicked()) {
      addStage();
    }
  }, [currentScore]);

  const elemClass = 'game';

  if (pokemonList.length === 0)
    return <div className={elemClass}>Loading...</div>;

  if (pokemonList)
    return (
      <div className={elemClass}>
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
