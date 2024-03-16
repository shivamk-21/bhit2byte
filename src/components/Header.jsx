import React from "react";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <h1>AI fashion Lab</h1>
    </div>
  );
};

export default Header;
