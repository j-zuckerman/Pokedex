import React, { useEffect, useContext, useState } from 'react';
import { pad } from '../../util';
import { PokedexContext } from '../../context';

export const EvolutionChain = ({ data }) => {
  const { evolutionDetails, fetchEvolutionChain } = useContext(PokedexContext);

  useEffect(() => {
    fetchEvolutionChain(data);
  }, [data]);

  console.log(evolutionDetails);
  if (evolutionDetails.length != 0)
    return (
      <div>
        {evolutionDetails.map((pokemon) => (
          <div>
            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pad(
                pokemon.id,
                3
              )}.png`}
            />
            <p>{pokemon.species_name}</p>
            <p>{pokemon.id}</p>
          </div>
        ))}
      </div>
    );
  else return null;
};
