import React, { useContext } from 'react';
import { PokedexContext } from '../../context';
import { pad } from '../../util';
import Card from '../../blocks/Card';

export const Pokedex = () => {
  const { pokemonEntries } = useContext(PokedexContext);

  return (
    <div>
      {pokemonEntries.map((pokemonEntry, index) => (
        <Card key={index + 1}>
          <Card.Header>
            <div>{index + 1}</div>
            {pokemonEntry.name.charAt(0).toUpperCase() +
              pokemonEntry.name.slice(1)}
          </Card.Header>
          <Card.PokemonImage
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pad(
              index + 1,
              3
            )}.png`}
          />
        </Card>
      ))}
    </div>
  );
};
