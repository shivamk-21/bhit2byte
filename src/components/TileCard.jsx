import React, { useState } from "react";
import { ResponseBox } from "./ResponseBox";

const TileCard = ({ name }) => {
  const [prevPrompt, setPrevPrompt] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleClick = async (text) => {
    try {
      setLoading(true); // Set loading to true when starting the request
      const response = await fetch(
        `https://b2b-server-lyart.vercel.app/searches?query=fashion ideas for ${text}`
      );

      const data = await response.json();
      setSearchResult(data.result);
      console.log("Response:", data);
      setPrevPrompt(text);
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showModal && (
        <ResponseBox
          close={toggleModal}
          propmpt={prevPrompt}
          data={searchResult}
        />
      )}
      <div className="tile" onClick={() => handleClick(name)}>
        <h2>
          {" "}
          {loading ? "Loading..." : ""} {name}
        </h2>
      </div>
    </>
  );
};

export default TileCard;
