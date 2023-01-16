import React from "react";
import navbarLogo from "./img/transparent-logo.png";
// import { HashLink as Link } from "react-router-hash-link";
import "./styles/index.css";
import "./styles/App.css";

function Navbar() {
  return (
    <nav
      id="navbar"
      className="navbar flex flex-row justify-evenly items-center bg-primary"
    >
      <img className="navbar-logo" src={navbarLogo} alt="Logo"></img>

      <section className="navlink flex flex-row items-center gap-x-24">
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
        <a
          href="/"
          className="navbar-links text-secondary shop-cta bg-sun text-primary"
        >
          Shop
        </a>
      </section>
    </nav>
  );
}

export default Navbar;
