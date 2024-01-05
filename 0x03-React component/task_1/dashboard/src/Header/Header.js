import React from "react";
import Logo from "../assets/holberton-Logo.jpg";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
    </>
  );
}

export default Header;
