import React, { useContext } from 'react';
import { PokedexContext } from '../../context';
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
          <Card.Image
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${
              index + 1
            }.png`}
          />
        </Card>
      ))}
    </div>
  );
};
