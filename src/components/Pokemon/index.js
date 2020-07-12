import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PokedexContext } from '../../context';
import PokemonContainer from '../../blocks/Pokemon';
import { pad } from '../../util';
import Specie from '../../elements/Specie';
import StatBar from '../../elements/StatBar';
import Ability from '../../elements/Ability';
import Form from '../../elements/Form';
import Type from '../../elements/Type';
import { EvolutionChain } from './EvolutionChain';
import { NavigationBar } from '../Navigation';

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

  if (pokemon.length != 0 && pokemonSpecies.length != 0)
    return (
      <>
        <NavigationBar data={pokemonSpecies.color.name}></NavigationBar>
        <div>
          <div className="margin-t" style={{ textAlign: 'center' }}>
            <h2 className="title">{pokemon.name}</h2>
            <Specie className={pokemonSpecies.color.name}>
              {pokemonSpecies.genus}
            </Specie>
          </div>
          <PokemonContainer>
            <PokemonContainer.Details>
              <table className="table table-borderless">
                <tr>
                  <td className="font-weight-bold">ID</td>
                  <td>#{pokemon.id}</td>
                </tr>
                <tr>
                  <td className="font-weight-bold">Height</td>
                  <td>{pokemon.height}</td>
                </tr>
                <tr>
                  <td className="font-weight-bold">Weight</td>
                  <td>{pokemon.weight}</td>
                </tr>
                <tr>
                  <td className="font-weight-bold">Abilities</td>
                  {pokemon.abilities.map((ability) => (
                    <td>
                      <Ability className={pokemonSpecies.color.name}>
                        {ability.ability.name}
                      </Ability>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="font-weight-bold">Type</td>
                  {pokemon.types.map((type) => (
                    <td>
                      <Type className={type.type.name}>{type.type.name}</Type>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="font-weight-bold">Forms</td>
                  {pokemon.forms.map((form) => (
                    <td>
                      <Form className={pokemonSpecies.color.name}>
                        {form.name}
                      </Form>
                    </td>
                  ))}
                </tr>
              </table>
            </PokemonContainer.Details>
            <PokemonContainer.PokemonImage>
              <img
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pad(
                  pokemon.id,
                  3
                )}.png`}
              />
            </PokemonContainer.PokemonImage>
            <PokemonContainer.Stats>
              <StatBar>
                <StatBar.Stat
                  className={pokemonSpecies.color.name}
                  style={{ width: `${pokemon.stat_percentages[0]}%` }}
                >
                  HP: {pokemon.stats[0].base_stat}
                </StatBar.Stat>
                <StatBar.Stat
                  className={pokemonSpecies.color.name}
                  style={{ width: `${pokemon.stat_percentages[1]}%` }}
                >
                  Attack: {pokemon.stats[1].base_stat}
                </StatBar.Stat>
                <StatBar.Stat
                  className={pokemonSpecies.color.name}
                  style={{ width: `${pokemon.stat_percentages[2]}%` }}
                >
                  Defense: {pokemon.stats[2].base_stat}
                </StatBar.Stat>
                <StatBar.Stat
                  className={pokemonSpecies.color.name}
                  style={{ width: `${pokemon.stat_percentages[3]}%` }}
                >
                  Special Attack: {pokemon.stats[3].base_stat}
                </StatBar.Stat>
                <StatBar.Stat
                  className={pokemonSpecies.color.name}
                  style={{ width: `${pokemon.stat_percentages[4]}%` }}
                >
                  Special Defense: {pokemon.stats[4].base_stat}
                </StatBar.Stat>
                <StatBar.Stat
                  className={pokemonSpecies.color.name}
                  style={{ width: `${pokemon.stat_percentages[5]}%` }}
                >
                  Speed: {pokemon.stats[5].base_stat}
                </StatBar.Stat>
              </StatBar>
            </PokemonContainer.Stats>
          </PokemonContainer>
          <div>
            <h2 className="title">Evolution Chain</h2>
            <EvolutionChain
              data={pokemonSpecies.evolution_chain.url}
            ></EvolutionChain>
          </div>
        </div>
      </>
    );
  else return null;
};
