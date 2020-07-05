import styled from 'styled-components';
import PokemonImage from './PokemonImage';
import Header from './Header';

const Card = styled.div`
  padding: 0.8rem;
  box-shadow: 2px 2px 4px 0px #cfd8dc;
`;

Card.Header = Header;
Card.PokemonImage = PokemonImage;

export default Card;
