import React from "react";
import background from "../../img/background.png";
// import productCatalogue from "../../img/catalogues.png";
// import { HashLink as Link } from "react-router-hash-link";

function Shop() {
  return (
    <section
      className="second-wrapper flex flex-col justify-start items-start bg-hopeful px-8 md:px-20 py-32 gap-y-8"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <section className="second-left w-3/5">
        <img
          className="product-overview"
          src={productCatalogue}
          alt="product-overview"
        ></img>
      </section> */}
      <h2 className="title text-headingOne ">
        Get your one-of-a-kind piece of art
      </h2>
      <p className="sub-title text-headingThree">
        You can order by clicking button below
      </p>
      <section className="flex flex-wrap justify-start items-center gap-4">
        <a
          className="shop-button text-bodyTwo bg-sun font-bold hover:-translate-y-1 hover:scale-110 duration-300"
          href="https://tokopedia.link/recyclingvillage"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i class="fa-solid fa-up-right-from-square mr-3"></i>
          Shop via Tokopedia
        </a>
        <a
          className="shop-button text-bodyTwo bg-sun font-bold hover:-translate-y-1 hover:scale-110 duration-300"
          href="https://wa.me/c/6281388454540"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i class="fa-brands fa-whatsapp mr-4"></i>
          Shop via WhatsApp
        </a>
        {/* <section className="second-right flex flex-col items-start justify-center gap-y-12 w-3/6 pl-10">
        
        </section> */}
      </section>
    </section>
  );
}

export default Shop;
