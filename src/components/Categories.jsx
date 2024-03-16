import React, { useRef, useState } from "react";
import Tilecard from "./TileCard";

const Categories = () => {
  const tilesHolderRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollTiles = (scrollOffset) => {
    const newScrollPosition = scrollPosition + scrollOffset;
    if (tilesHolderRef.current) {
      tilesHolderRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth"
      });
      setScrollPosition(newScrollPosition);
    }
  };

  return (
    <div className="categories">
      <h2>Categories</h2>
      <button className="left" onClick={() => scrollTiles(-400)}>&lt;</button>
      <button className="right" onClick={() => scrollTiles(400)}>&gt;</button>
      <div className="tiles" ref={tilesHolderRef}>
        <div className="tilesHolder" >
          <Tilecard />
          <Tilecard />
          <Tilecard />
          <Tilecard />
          <Tilecard />
          <Tilecard />
          <Tilecard />
          <Tilecard />
          <Tilecard />
          <Tilecard />
          <Tilecard />
          <Tilecard />
        </div>
      </div>
    </div>
  );
};

export default Categories;
