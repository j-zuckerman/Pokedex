import React, { createContext, useState, useEffect } from 'react';
import pokeApi from '../util/api';

export const PokedexContext = createContext();

const PokedexProvider = ({ children }) => {
  //Pokemon entry for home page
  const [pokemonEntries, setPokemonEntries] = useState([]);

  //Pokemon details for selected pokemon
  const [pokemon, setPokemon] = useState([]);

  //Fetch all the pokemon names from PokeApi
  async function fetchPokemonEntries() {
    const response = await pokeApi.get('pokemon/?limit=807');
    console.log(response.data.results);
    setPokemonEntries(response.data.results);
  }

  async function fetchSpecificPokemon(pokemonId) {
    const response = await pokeApi.get(`pokemon/${pokemonId}`);

    setPokemon(response.data.results);
  }

  //Fetch data for homepage
  useEffect(() => {
    fetchPokemonEntries();
  }, []);

  return (
    <PokedexContext.Provider
      value={{ pokemon, pokemonEntries, fetchSpecificPokemon }}
    >
      {children}
    </PokedexContext.Provider>
  );
};

export default PokedexProvider;
