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
              <div>
                <Label>ID</Label>
                <Text> #{pokemon.id}</Text>
              </div>

              <div>
                <Label>Height</Label>
                <Text> {pokemon.height}</Text>
              </div>

              <div>
                <Label>Weight</Label>
                <Text>{pokemon.weight}</Text>
              </div>

              <div>
                <Label>Abilities </Label>
                {pokemon.abilities.map((ability) => (
                  <span>{ability.ability.name}</span>
                ))}
              </div>

              <div>
                <Label>Type: </Label>
                {pokemon.types.map((type) => (
                  <span>{type.type.name}</span>
                ))}
              </div>

              <div>
                <Label>Forms: </Label>
                {pokemon.forms.map((form) => (
                  <span>{form.name}</span>
                ))}
              </div>
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
