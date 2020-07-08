import React from 'react';
import Navbar from '../../blocks/Navbar';
import SearchBar from '../../elements/SearchBar';
import Title from '../../elements/Title';

export const NavigationBar = () => {
  return (
    <Navbar>
      <SearchBar type="text" placeholder="Search..."></SearchBar>
      <Title>Pokédex</Title>
    </Navbar>
  );
};
