import React from "react";
import logo from "./img/official-logo.png";

function Footer() {
  return (
    <div className="footer flex flex-row justify-between gap-x-12 bg-primary py-20 px-20">
      <section className="left-footer flex flex-col justify-center items-start gap-y-12">
        <img className="footer-logo" src={logo} alt="Logo"></img>
        <p className="text-secondary text-bodyTwo">
          At Recycling Village, we are redefining the relationship between
          fashion, people, and the earth. Join us on our mission to create a
          more responsible and beautiful world.
        </p>
        <a
          href="https://tokopedia.link/recyclingvillage"
          className="shop-button text-bodyTwo bg-sun font-bold hover:-translate-y-1 hover:scale-110 duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop our product
        </a>
      </section>
      <section className="right-footer text-secondary flex flex-row justify-center gap-x-14">
        <section className="links flex flex-col items-start">
          <h5 className="text-headingFour font-ibarra mb-5">Connect with us</h5>
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
          <h5 className="text-headingFour mb-5">Stockist</h5>
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
