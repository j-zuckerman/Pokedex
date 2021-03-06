import styled from 'styled-components';
import PokemonImage from './PokemonImage';
import Header from './Header';

const Card = styled.div`
  padding: 0.8rem;
  box-shadow: 2px 2px 4px 0px #cfd8dc;
  background-color: whitesmoke;
  border: 1px solid gainsboro;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #cacfc9;
  }
`;

Card.Header = Header;
Card.PokemonImage = PokemonImage;

export default Card;
