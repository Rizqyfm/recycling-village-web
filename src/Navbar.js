import React from "react";
import navbarLogo from "./img/transparent-logo.png";
// import { HashLink as Link } from "react-router-hash-link";
import "./styles/index.css";

function Navbar() {
  return (
    <nav id="navbar" className="navbar">
      <img className="logo" src={navbarLogo} alt="Logo"></img>

      <section className="navlink">
        <a href="/" className="navbar-links text-secondary">
          Our story
        </a>
        <a href="/" className="navbar-links text-secondary">
          Our product
        </a>
        <a href="/" className="navbar-links text-secondary">
          Locations
        </a>
        <a href="/" className="navbar-links text-secondary">
          Newsletter
        </a>
        <a href="/" className="navbar-links text-secondary">
          Partnership
        </a>
        <a href="/" className="navbar-links text-secondary">
          Shop
        </a>
      </section>
    </nav>
  );
}

export default Navbar;
