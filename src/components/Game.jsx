import React, { useEffect, useState } from 'react';
import DisplayList from './DisplayList';
import Loading from './Loading/Loading';

const Game = ({ score, order, addStage }) => {
  const { currentScore } = score;
  const [pokemonList, setPokemonList] = useState([]);

  const shinyRoll = () => {
    const randomNum = Math.floor(Math.random() * 100 + 1);
    return randomNum < 5;
  };

  const fetchPokemonData = (pokemon) => {
    const { url } = pokemon;
    fetch(url)
      .then((response) => response.json())
      .then((pokeData) => {
        setPokemonList((state) => [
          ...state,
          { pokeData, clicked: false, shiny: shinyRoll() },
        ]);
      });
  };

  const fetchPokemon = (limit, offset, abortController) => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`,
      { signal: abortController.signal }
    )
      .then((response) => response.json())
      .then((allpokemon) => {
        allpokemon.results.forEach((pokemon) => {
          fetchPokemonData(pokemon);
        });
      })
      .catch((error) => {
        if (!pokemonList.length === 0) {
          throw error.message;
        }
      });
  };

  const clickPokemon = (id) => {
    const newArr = pokemonList.map((obj) => {
      if (obj.pokeData.id === id) {
        // eslint-disable-next-line no-param-reassign
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
    const abortController = new AbortController();

    const limit = order.length;
    // up to gen 8 pokemon
    const offset = Math.floor(Math.random() * 905 - limit);

    if (checkAllClicked() || currentScore === 0) {
      setPokemonList([]);
      fetchPokemon(limit, offset, abortController);
    }

    if (checkAllClicked()) {
      addStage();
    }

    return () => {
      abortController.abort();
    };
  }, [currentScore]);

  if (pokemonList.length === 0)
    return (
      <div className='game loading'>
        <Loading />
      </div>
    );

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

  return null;
};

export default Game;
