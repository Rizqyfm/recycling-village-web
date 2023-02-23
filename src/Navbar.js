import React from "react";
import navbarLogo from "./img/transparent-logo.png";
import { HashLink as Link } from "react-router-hash-link";
import "./styles/index.css";
import "./styles/App.css";

function Navbar() {
  return (
    <nav
      id="navbar"
      className="navbar flex flex-row justify-between bg-primary px-20 py-8"
    >
      <Link className="anchorLinkNav text-secondary" to="/" smooth activeStyle>
        <img className="navbar-logo" src={navbarLogo} alt="Logo"></img>
      </Link>

      <section className="navlink flex flex-row items-center gap-x-24">
        {/* <Link
          className="navbar-links text-secondary"
          to="/Story"
          smooth
          activeStyle
        >
          Our story
        </Link>

        <Link
          className="navbar-links text-secondary"
          to="/Story"
          smooth
          activeStyle
        >
          Our product
        </Link>

        <Link
          className="navbar-links text-secondary"
          to="/Story"
          smooth
          activeStyle
        >
          Locations
        </Link>

        <Link
          className="navbar-links text-secondary"
          to="/Story"
          smooth
          activeStyle
        >
          Newsletter
        </Link>

        <Link
          className="navbar-links text-secondary"
          to="/Story"
          smooth
          activeStyle
        >
          Partnership
        </Link> */}

        <a
          className="navbar-links text-secondary navbar-shop-cta bg-sun text-primary font-bold"
          href="https://wa.me/c/6281388454540"
          smooth
          activeStyle
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop
        </a>
      </section>
    </nav>
  );
}

export default Navbar;
