import React, { useState, useContext } from 'react';
import { PokedexContext } from '../../context';
import SearchBar from '../../elements/SearchBar';

export const Search = () => {
  const { searchPokemon } = useContext(PokedexContext);
  const [searchVal, setSearchVal] = useState('');

  function handleChange(e) {
    setSearchVal(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    searchPokemon(searchVal);
    setSearchVal('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <SearchBar
        value={searchVal}
        onChange={handleChange}
        type="search"
        placeholder="Search..."
      ></SearchBar>
    </form>
  );
};
