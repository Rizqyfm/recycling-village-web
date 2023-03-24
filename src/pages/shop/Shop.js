import React from "react";
import productCatalogue from "../../img/catalogues.png";
// import { HashLink as Link } from "react-router-hash-link";

function Shop() {
  return (
    <section className="second-wrapper flex flex-row justify-start items-center bg-secondary h-screen">
      <section className="second-left w-3/5">
        <img
          className="product-overview"
          src={productCatalogue}
          alt="product-overview"
        ></img>
      </section>
      <section className="second-right flex flex-col items-start justify-center gap-y-12 w-3/6 pl-10">
        <h2 className="sub-title text-headingTwo text-left text-primary">
          Get your one-of-a-kind piece of art
        </h2>
        <section className="flex items-center align-center justify-between gap-y-6">
          <a
            className="shop-button text-bodyTwo bg-sun font-bold hover:-translate-y-1 hover:scale-110 duration-300"
            href="https://tokopedia.link/recyclingvillage"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i class="fa-brands fa-whatsapp mr-4"></i>
            Shop via Tokopedia
          </a>
          <a
            className="shop-button text-bodyTwo bg-sun font-bold hover:-translate-y-1 hover:scale-110 duration-300"
            href="https://tokopedia.link/recyclingvillage"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i class="fa-brands fa-whatsapp mr-4"></i>
            Shop via WhatsApp
          </a>
        </section>
      </section>
    </section>
  );
}

export default Shop;
