import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PokedexContext } from '../../context';
import PokemonContainer from '../../blocks/Pokemon';
import { pad } from '../../util';
import Label from '../../elements/Label';
import Text from '../../elements/Text';
import { EvolutionChain } from './EvolutionChain';

export const Pokemon = () => {
  const {
    pokemon,
    fetchSpecificPokemon,
    pokemonSpecies,
    fetchPokemonSpecies,
  } = useContext(PokedexContext);

  let { id } = useParams();

  console.log(id);
  useEffect(() => {
    fetchSpecificPokemon(id);
    fetchPokemonSpecies(id);
  }, [id]);

  console.log(pokemon.stats);
  console.log(pokemonSpecies);
  if (pokemon.length != 0 && pokemonSpecies.length != 0)
    return (
      <>
        <h2>{pokemon.name}</h2>
        <PokemonContainer>
          <PokemonContainer.Details>
            <div>
              <p>ID: {pokemon.id}</p>
              <p>Height: {pokemon.height}</p>
              <p>Weight: {pokemon.weight}</p>
              <p>Abilities: </p>
              {pokemon.abilities.map((ability) => (
                <p>
                  {ability.ability.name.charAt(0).toUpperCase() +
                    ability.ability.name.slice(1)}
                </p>
              ))}
              <p>Type: </p>
              {pokemon.types.map((type) => (
                <p>
                  {type.type.name.charAt(0).toUpperCase() +
                    type.type.name.slice(1)}
                </p>
              ))}
              <p>Forms: </p>
              {pokemon.forms.map((form) => (
                <p>{form.name.charAt(0).toUpperCase() + form.name.slice(1)}</p>
              ))}
            </div>
          </PokemonContainer.Details>
          <PokemonContainer.PokemonImage>
            {' '}
            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pad(
                pokemon.id,
                3
              )}.png`}
            />
          </PokemonContainer.PokemonImage>
          <PokemonContainer.Stats>
            <p>HP: {pokemon.stats[0].base_stat}</p>
            <p>Attack: {pokemon.stats[1].base_stat}</p>
            <p>Defense: {pokemon.stats[2].base_stat}</p>
            <p>Special Attack: {pokemon.stats[3].base_stat}</p>
            <p>Special Defense: {pokemon.stats[4].base_stat}</p>
            <p>Speed: {pokemon.stats[5].base_stat}</p>
          </PokemonContainer.Stats>
        </PokemonContainer>
        <div>
          <EvolutionChain
            data={pokemonSpecies.evolution_chain.url}
          ></EvolutionChain>
        </div>
      </>
    );
  else return null;
};
