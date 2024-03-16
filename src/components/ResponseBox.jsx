import React from "react";

export const ResponseBox = ({ close, data, propmpt, keywords }) => {
  // Split the keywords string into an array
  const keywordArray = keywords.split(",").map((keyword) => keyword.trim());

  const renderImages = () => {
    return keywordArray.map((keyword, index) => (
      <>
        <img
          key={index}
          src={`https://source.unsplash.com/random/?${keyword}`}
          alt={`Image ${index + 1}`}
          className="renderImages"
        />
        <br />
      </>
    ));
  };

  return (
    <div className="Response">
      <button className="Close" onClick={close}>
        X
      </button>
      <div className="responseBox">
        <div className="singleResponse">Prompt Was: {propmpt}</div>
        <div className="singleResponse">Response: {data}</div>
        <div className="imageContainer">{renderImages()}</div>
      </div>
    </div>
  );
};
