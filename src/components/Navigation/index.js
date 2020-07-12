import React from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../../blocks/Navbar';
import Title from '../../elements/Title';
import { Search } from './Search';

export const NavigationBar = ({ page, data }) => {
  let history = useHistory();

  if (page === 'Homepage')
    return (
      <Navbar>
        <Search></Search>

        <Title>Pokédex</Title>
      </Navbar>
    );
  else
    return (
      <Navbar className={data}>
        <button className="back-button" onClick={() => history.goBack()}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-arrow-left"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"
            />
            <path
              fill-rule="evenodd"
              d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <Title>Pokédex</Title>
      </Navbar>
    );
};
