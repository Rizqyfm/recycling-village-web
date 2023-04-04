import React from "react";
import navbarLogo from "./img/transparent-logo.png";
import { HashLink as Link } from "react-router-hash-link";
import "./styles/index.css";
import "./styles/App.css";

function Navbar() {
  return (
    <nav
      id="navbar"
      className="navbar flex flex-row justify-between bg-primary px-8 md:px-10 lg:px-14 py-8"
    >
      <Link className="anchorLinkNav text-secondary" to="/" smooth activeStyle>
        <img
          className="navbar-logo w-20 md:w-24 lg:w-28"
          src={navbarLogo}
          alt="Logo"
        ></img>
      </Link>

      <section className="navlink flex flex-row items-center gap-x-24">
        <a
          className="shop-button bg-sun font-bold hover:-translate-y-1 hover:scale-110 duration-300"
          href="https://tokopedia.link/recyclingvillage"
          smooth
          activeStyle
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop
        </a>
        {/* <Link
          className="anchorLinkNav text-secondary"
          to="/Shop"
          smooth
          activeStyle
        >
          <button className="navbar-links text-secondary navbar-shop-cta bg-sun text-primary font-bold">
            Shop
          </button>
        </Link> */}
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
      </section>
    </nav>
  );
}

export default Navbar;
