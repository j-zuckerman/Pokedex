import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PokedexContext } from '../../context';
import { pad } from '../../util';
import styled from 'styled-components';
import Card from '../../blocks/Card';
import { NavigationBar } from '../Navigation';

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 4rem;
`;

export const Pokedex = () => {
  const { pokemonToDisplay } = useContext(PokedexContext);

  return (
    <>
      <NavigationBar page={'Homepage'}></NavigationBar>
      <Layout>
        {pokemonToDisplay.map((pokemonEntry, index) => (
          <Link to={`/pokemon/${index + 1}`} style={{ textDecoration: 'none' }}>
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
          </Link>
        ))}
      </Layout>
    </>
  );
};
