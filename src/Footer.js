import React from "react";
import logo from "./img/official-logo.png";

function Footer() {
  return (
    <div className="footer flex flex-row justify-between gap-x-12 bg-primary py-20 px-20">
      <section className="left-footer flex flex-col justify-center items-start gap-y-12">
        <img className="footer-logo" src={logo} alt="Logo"></img>
        <p className="text-white">
          Since 2021, RV has been creating products in a different way, mixing
          social projects, economic justice, and ecological materials.
        </p>
        <a
          href="/"
          className="shop-button text-bodyTwo bg-sun font-bold hover:-translate-y-1 hover:scale-110 duration-300"
        >
          Shop our product
        </a>
      </section>
      <section className="right-footer flex flex-row justify-center items-start gap-x-12">
        <section className="links flex flex-col items-start">
          <h5 className="text-headingFour text-white font-ibarra border-b-2 border-ridge pb-5">
            Links
          </h5>
          <a href="/" className="text-bodyTwo text-white pb-2.5">
            Our story
          </a>
          <a href="/" className="text-bodyTwo text-white pb-2.5">
            Our product
          </a>
          <a href="/" className="text-bodyTwo text-white pb-2.5">
            Partnership
          </a>
          <a href="/" className="text-bodyTwo text-white pb-2.5">
            Locations
          </a>
        </section>
        <section className="links flex flex-col items-start">
          <h5 className="text-headingFour text-white pb-5">Resources</h5>
          <a href="/" className="text-bodyTwo text-white pb-2.5">
            FAQ
          </a>
          <a href="/" className="text-bodyTwo text-white pb-2.5">
            Newsletter
          </a>
        </section>
        <section className="links flex flex-col items-start">
          <h5 className="text-headingFour text-white pb-5">Socials</h5>
          <a href="/" className="text-bodyTwo text-white pb-2.5">
            Instagram
          </a>
          <a href="/" className="text-bodyTwo text-white pb-2.5">
            WhatsApp
          </a>
        </section>
      </section>
    </div>
  );
}

export default Footer;
