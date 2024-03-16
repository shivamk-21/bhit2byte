import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import Categotries from "../components/Categories";
const MainPage = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <Categotries />
      {/* <Footer /> */}
    </>
  );
};

export default MainPage;
