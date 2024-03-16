import React, { useEffect, useRef, useState } from "react";
import Tilecard from "./TileCard";

const Categories = () => {
  const tilesHolderRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the given link
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch("https://b2b-server-lyart.vercel.app/categories");
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

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
        <div className="tilesHolder">
          {categories.map((category, index) => (
            <Tilecard key={index} name={category[0]} /> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
