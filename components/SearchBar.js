import React from 'react';

function SearchBar({ onSearch }) {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={handleInputChange} />
    </div>
  );
}

export default SearchBar;
