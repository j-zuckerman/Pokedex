import styled from 'styled-components';

const StatBar = styled.ul`
  list-style: none;
  padding-top: 20px;
  width: 80%;
`;

const Stat = styled.li`
  height: 40px;
  color: black;
  text-align: left;
  font-style: italic;
  font-weight: bolder;
  font-size: 1.2rem;
  line-height: 35px;
  padding: 0px 20px;
  margin-bottom: 5px;
`;

StatBar.Stat = Stat;

export default StatBar;
