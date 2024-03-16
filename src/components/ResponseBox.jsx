import React from "react";

export const ResponseBox = ({ close, data, propmpt }) => {
  return (
    <div className="Response">
      <button className="Close" onClick={close}>
        X
      </button>
      <div className="responseBox">
        <div className="singleResponse">Prompt Was : {propmpt}</div>
        <div className="singleResponse">Response : {data}</div>
      </div>
    </div>
  );
};
