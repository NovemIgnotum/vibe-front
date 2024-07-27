import React from "react";
import "./style/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <input
        className="searchInput"
        type="text"
        placeholder="Recherchez une musique, un artiste ou un utilisateur"
      />
    </div>
  );
};

export default SearchBar;
