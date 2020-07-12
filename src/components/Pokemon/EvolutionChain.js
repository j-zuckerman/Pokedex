import React, { useEffect, useContext, useState } from 'react';
import { pad } from '../../util';
import { PokedexContext } from '../../context';

export const EvolutionChain = ({ data }) => {
  const { evolutionDetails, fetchEvolutionChain } = useContext(PokedexContext);

  const container = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '4rem',
  };
  useEffect(() => {
    fetchEvolutionChain(data);
  }, [data]);

  console.log(evolutionDetails);
  if (evolutionDetails.length != 0)
    return (
      <div style={container}>
        {evolutionDetails.map((pokemon) => (
          <div>
            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pad(
                pokemon.id,
                3
              )}.png`}
            />
            <p className="font-weight-bold">#{pokemon.id}</p>
            <p className="font-weight-bold text-capitalize">
              {pokemon.species_name}
            </p>
          </div>
        ))}
      </div>
    );
  else return null;
};
