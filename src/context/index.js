import React, { createContext, useState, useEffect } from 'react';
import pokeApi from '../util/api';
import { pad } from '../util';

export const PokedexContext = createContext();

const PokedexProvider = ({ children }) => {
  //Pokemon entry for home page
  const [pokemonEntries, setPokemonEntries] = useState([]);

  //Pokemon details for selected pokemon
  const [pokemon, setPokemon] = useState([]);
  const [pokemonSpecies, setPokemonSpecies] = useState([]);
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [evolutionDetails, setEvolutionDetails] = useState([]);

  //Fetch all the pokemon names from PokeApi
  async function fetchPokemonEntries() {
    const response = await pokeApi.get('pokemon/?limit=807');
    console.log(response.data.results);
    setPokemonEntries(response.data.results);
  }

  async function fetchSpecificPokemon(pokemonId) {
    const response = await pokeApi.get(`pokemon/${pokemonId}`);

    console.log(response.data);
    setPokemon(response.data);
  }

  async function fetchPokemonSpecies(pokemonId) {
    const response = await pokeApi.get(`pokemon-species/${pokemonId}`);

    console.log(response.data);
    setPokemonSpecies(response.data);
  }

  function getEvolutionDetails(data) {
    var evoChain = [];
    var evoData = data;

    console.log(evoData);
    do {
      var evoDetails = evoData['evolution_details'][0];
      var urlParts = evoData.species.url.split('/');
      var pokemonID = urlParts[urlParts.length - 2];
      evoChain.push({
        species_name: evoData.species.name,
        id: pokemonID,
        min_level: !evoDetails ? 1 : evoDetails.min_level,
        trigger_name: !evoDetails ? null : evoDetails.trigger.name,
        item: !evoDetails ? null : evoDetails.item,
      });

      evoData = evoData['evolves_to'][0];
    } while (!!evoData && evoData.hasOwnProperty('evolves_to'));

    setEvolutionDetails(evoChain);
  }

  async function fetchEvolutionChain(evolutionChainUrl) {
    const response = await fetch(evolutionChainUrl);
    const data = await response.json();
    getEvolutionDetails(data.chain);
    console.log(data.chain);
    setEvolutionChain(data.chain);
  }
  //Fetch data for homepage
  useEffect(() => {
    fetchPokemonEntries();
  }, []);

  return (
    <PokedexContext.Provider
      value={{
        pokemon,
        pokemonEntries,
        pokemonSpecies,
        fetchSpecificPokemon,
        fetchPokemonSpecies,
        evolutionDetails,
        fetchEvolutionChain,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
};

export default PokedexProvider;
