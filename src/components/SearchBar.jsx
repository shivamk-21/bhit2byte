import React, { useState } from "react";
import { ResponseBox } from "./ResponseBox";

const SearchBar = () => {
  const [prompt, setPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [keywords, setKeywords] = useState(null);
  const [loading, setLoading] = useState(false); // State variable to track loading state

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleClick = async () => {
    try {
      setLoading(true); // Set loading to true when starting the request
      const response = await fetch(
        `https://b2b-server-lyart.vercel.app/searches?query=${prompt}`
      );

      const data = await response.json();
      setSearchResult(data.result);
      setKeywords(data.keywords);
      setPrevPrompt(prompt);
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
    setPrompt("");
  };

  return (
    <>
      {showModal && (
        <ResponseBox
          close={toggleModal}
          propmpt={prevPrompt}
          data={searchResult}
          keywords={keywords}
        />
      )}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Get fashion Ideas..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit" onClick={handleClick}>
          {loading ? "Searching..." : "Search"}
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
