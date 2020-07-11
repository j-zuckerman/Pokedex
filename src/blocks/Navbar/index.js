import styled from 'styled-components';
import FirstItem from './FirstItem';
import LastItem from './LastItem';

const Navbar = styled.div.attrs((props) => ({ className: props.className }))`
  overflow: hidden;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  height: 4rem;
  justify-content: space-between;
`;

Navbar.FirstItem = FirstItem;
Navbar.LastItem = LastItem;

export default Navbar;
