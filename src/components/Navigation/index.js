import React from 'react';
import Navbar from '../../blocks/Navbar';
import SearchBar from '../../elements/SearchBar';
import Title from '../../elements/Title';

export const NavigationBar = ({ page }) => {
  if (page === 'Homepage')
    return (
      <Navbar>
        <SearchBar type="text" placeholder="Search..."></SearchBar>
        <Title>Pokédex</Title>
      </Navbar>
    );
  else
    return (
      <Navbar>
        <Title>Pokédex</Title>
      </Navbar>
    );
};
