import React from "react";
import logo from "./img/official-logo.png";
// import { HashLink as Link } from "react-router-hash-link";

function Footer() {
  return (
    <div className="footer flex flex-col lg:flex-row gap-y-10 lg:justify-between bg-primary py-8 px-8 md:px-10 lg:px-14 lg:py-12">
      <section className="left-footer flex flex-col items-start gap-y-8 md:w-2/3 lg:w-full">
        <img
          className="footer-logo h-8 md:h-10 lg:h-10"
          src={logo}
          alt="Logo"
        ></img>
        <p className="text-secondary text-bodyTwo md:text-bodyOne">
          At Recycling Village, we are redefining the relationship between
          fashion, people, and the earth. Join us on our mission to create a
          more responsible and beautiful world.
        </p>
        {/* <Link
          className="shop-button text-bodyTwo bg-sun font-bold hover:-translate-y-1 hover:scale-110 duration-300"
          to="/Shop"
          smooth
          activeStyle
        >
          <button className=""> Shop our catalogues</button>
        </Link> */}
        <a
          className="shop-button text-bodyTwo bg-sun font-bold hover:-translate-y-1 hover:scale-110 duration-300"
          href="https://tokopedia.link/recyclingvillage"
          smooth
          activeStyle
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop our catalogues
        </a>
      </section>
      <section className="right-footer text-secondary flex flex-row justify-between md:w-2/3 md:justify-start md:gap-x-12 lg:justify-center">
        <section className="links flex flex-col items-start">
          <h5 className="text-bodyOne font-ibarra mb-5">Socials</h5>
          <a
            href="https://www.instagram.com/recyclingvillage/"
            className="text-bodyTwo mb-5 hover:underline hover:cursor-pointer cta-footer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-instagram mr-2"></i>
            Instagram
          </a>
          <a
            href="https://wa.me/6281388454540"
            className="text-bodyTwo mb-5 hover:underline hover:cursor-pointer cta-footer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-whatsapp mr-2"></i>
            WhatsApp
          </a>
        </section>
        <section className="links flex flex-col items-start">
          <h5 className="text-bodyOne mb-5">Stockist</h5>
          <a
            href="https://sonderlab.co/collections/recycling-village"
            className="text-bodyTwo mb-5 hover:underline hover:cursor-pointer cta-footer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sonderlab
          </a>
          <a
            href="https://housewarming-space.com/id"
            className="text-bodyTwo mb-5 hover:underline hover:cursor-pointer cta-footer"
            target="_blank"
            rel="noopener noreferrer"
          >
            House Warming
          </a>
          <a
            href="https://www.instagram.com/unearth_space"
            className="text-bodyTwo mb-5 hover:underline hover:cursor-pointer cta-footer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unearth
          </a>
        </section>
        {/* <section className="links flex flex-col items-start">
          <h5 className="text-headingFour font-ibarra mb-5">Links</h5>
          <a
            href="/"
            className="text-bodyTwo mb-5 hover:underline hover:cursor-pointer"
          >
            Our story
          </a>
          <a
            href="/"
            className="text-bodyTwo mb-5 hover:underline hover:cursor-pointer"
          >
            Our product
          </a>
          <a
            href="/"
            className="text-bodyTwo mb-5 hover:underline hover:cursor-pointer"
          >
            Partnership
          </a>
          <a
            href="/"
            className="text-bodyTwo mb-5 hover:underline hover:cursor-pointer"
          >
            Locations
          </a>
        </section>
        <section className="links flex flex-col items-start">
          <h5 className="text-headingFour mb-5">Resources</h5>
          <a
            href="/"
            className="text-bodyTwo mb-5 hover:underline hover:cursor-pointer"
          >
            FAQ
          </a>
          <a
            href="/"
            className="text-bodyTwo mb-5 hover:underline hover:cursor-pointer"
          >
            Newsletter
          </a>
        </section> */}
      </section>
    </div>
  );
}

export default Footer;
