import React from "react";

export const ResponseBox = ({ close }) => {
  return (
    <div className="Response">
      <button className="Close" onClick={close}>
        X
      </button>
      <div className="responseBox">
        <div className="singleResponse">gdfgd</div>
      </div>
    </div>
  );
};
