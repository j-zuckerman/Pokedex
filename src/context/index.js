import React, { createContext, useState, useEffect } from 'react';
import pokeApi from '../util/api';
import { pad } from '../util';

export const PokedexContext = createContext();

const PokedexProvider = ({ children }) => {
  //Pokemon entry for home page
  const [pokemonToDisplay, setPokemonToDisplay] = useState([]);
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
    setPokemonToDisplay(response.data.results);
  }

  async function fetchSpecificPokemon(pokemonId) {
    const response = await pokeApi.get(`pokemon/${pokemonId}`);

    console.log(response.data);

    let statPercentages = [];
    //Calculate max stat in order to come up with percentages.
    const maxStat = response.data.stats.reduce((prev, current) =>
      prev.base_stat > current.base_stat ? prev : current
    );

    response.data.stats.map((stat) =>
      statPercentages.push(
        ((stat.base_stat / maxStat.base_stat) * 100).toFixed(0)
      )
    );

    response.data.stat_percentages = statPercentages;

    console.log(response.data);

    setPokemon(response.data);
  }

  async function fetchPokemonSpecies(pokemonId) {
    const response = await pokeApi.get(`pokemon-species/${pokemonId}`);

    const genus = response.data.genera.filter(
      (genus) => genus.language.name == 'en'
    )[0].genus;

    response.data.genus = genus;
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

  async function searchPokemon(searchedPokemon) {
    console.log(searchedPokemon);
    setPokemonToDisplay(
      pokemonEntries.filter(
        (p) => p.name.toUpperCase() === searchedPokemon.toUpperCase()
      )
    );

    console.log(pokemon);
  }

  //Fetch data for homepage
  useEffect(() => {
    fetchPokemonEntries();
  }, []);

  return (
    <PokedexContext.Provider
      value={{
        pokemon,
        pokemonSpecies,
        fetchSpecificPokemon,
        fetchPokemonSpecies,
        evolutionDetails,
        searchPokemon,
        fetchEvolutionChain,
        pokemonToDisplay,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
};

export default PokedexProvider;
