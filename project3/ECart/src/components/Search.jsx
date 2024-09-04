// SearchBar.jsx
import React from 'react';


const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Enter products.." className="search-input" />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
