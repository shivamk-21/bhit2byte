import React, { useState } from "react";
import { ResponseBox } from "./ResponseBox";

const SearchBar = () => {
  const [prompt, setPrompt] = useState("");
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleClick = () => {
    console.log(`You searched for ${prompt}`);
    setPrompt("");
    setShowModal(true);
  };
  return (
    <>
      {showModal && <ResponseBox close={toggleModal} />}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit" onClick={handleClick}>
          Search
        </button>
        <div>Welcome to AI Fashion Lab...</div>
        <p>
          Where Style Meets <b>Intelligence</b>
        </p>
      </div>
    </>
  );
};

export default SearchBar;
