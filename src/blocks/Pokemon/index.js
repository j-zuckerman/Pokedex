import styled from 'styled-components';
import Details from './Details';
import Stats from './Stats';
import Name from './Name';
import PokemonImage from './PokemonImage';

const PokemonContainer = styled.div`
  display: flex;
`;

PokemonContainer.Name = Name;
PokemonContainer.Stats = Stats;
PokemonContainer.Details = Details;
PokemonContainer.PokemonImage = PokemonImage;

export default PokemonContainer;
