import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" />
      <button type="submit">Search</button>
      <div>Welcome to AI Fashion Lab...</div>
      <p>
        Where Style Meets <b>Intelligence</b>
      </p>
    </div>
  );
};

export default SearchBar;
