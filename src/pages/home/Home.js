import React from "react";
import Closing from "../../Closing";
import background from "../../img/background.png";
import backgroundPersonDoodles from "../../img/background-person-doodles.png";
import backgroundPartnership from "../../img/background-partnership.png";
import productOverview from "../../img/product-overview.png";
import doodlesLove from "../../img/doodles-love.png";
// import backgroundProduct from "../../img/background-product-section.png";
// import doodlesHijab from "../../img/doodles-hijab.png";
// import doodlesLongHair from "../../img/doodles-longhair.png";

function Home() {
  return (
    <div className="home-wrapper">
      {/* Hero section */}
      <section
        className="hero-wrapper h-screen flex flex-col justify-center items-center gap-y-12 bg-secondary px-20"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }}
      >
        <section className="hero-words flex flex-col gap-y-7">
          <h1 className="title text-headingOne text-center font-bold">
            Creating treasures out of plastic waste, and you can have it.
          </h1>
          <h2 className="sub-title text-headingThree text-center">
            We sell bags, wallets, tote bags, and many moreee. <br /> Which you
            probably love.
          </h2>
        </section>

        <section className="hero-ctas flex flex-col items-center gap-y-1">
          <a
            href="/"
            className="shop-button text-bodyTwo bg-sun font-bold hover:-translate-y-1 hover:scale-110 duration-300"
          >
            Shop our product
          </a>
          {/* <p>or</p>
          <a
            href="/"
            className="link-button text-bodyTwo hover:-translate-y-1 hover:scale-110 duration-300"
          >
            Read our story
          </a> */}
        </section>
      </section>

      {/* Product section */}
      <section className="second-wrapper h-screen flex flex-row justify-center items-center pr-20">
        <section className="second-left">
          <img
            className="product-overview"
            src={productOverview}
            alt="product-overview"
          ></img>
        </section>
        <section className="second-right flex flex-col gap-y-12 items-start ml-20">
          <h2 className="title text-headingTwo text-left">
            Handcrafted, <br /> by local woman.
          </h2>
          <h3 className="sub-title text-headingThree text-left">
            Colorful, playful, joyful, and absolutely, high quality.
          </h3>
          {/* <a
            href="/"
            className="shop-button text-bodyTwo bg-sun font-bold hover:-translate-y-1 hover:scale-110 duration-300"
          >
            Browse catalogues
          </a> */}
          <img className="doodles-love" src={doodlesLove} alt="doodles"></img>
        </section>
      </section>

      {/* About section */}
      <section
        className="third-wrapper bg-secondary h-screen flex flex-col justify-center items-center px-20 gap-y-12"
        style={{
          backgroundImage: `url(${backgroundPersonDoodles})`,
          backgroundSize: "cover",
        }}
      >
        <h2 className="title text-headingTwo text-center">
          Starting from the bottom now we here~~
        </h2>
        <section className="about-elements flex flex-row gap-x-12 ">
          <section className="about-box bg-white flex flex-col justify-center">
            <p className="text-headingFour text-center font-bold">1 problem</p>
            <p className="text-bodyTwo text-center">
              Recycle more than 1000kg of plastics
            </p>
          </section>
          <section className="about-box bg-white flex flex-col justify-center">
            <p className="text-headingFour text-center font-bold">1 problem</p>
            <p className="text-bodyTwo text-center">
              Recycle more than 1000kg of plastics
            </p>
          </section>
          <section className="about-box bg-white flex flex-col justify-center">
            <p className="text-headingFour text-center font-bold">1 problem</p>
            <p className="text-bodyTwo text-center">
              Recycle more than 1000kg of plastics
            </p>
          </section>
          <section className="about-box bg-white flex flex-col justify-center">
            <p className="text-headingFour text-center font-bold">1 problem</p>
            <p className="text-bodyTwo text-center">
              Recycle more than 1000kg of plastics
            </p>
          </section>
        </section>
        {/* <a
          href="/"
          className="shop-button text-bodyTwo bg-sun font-bold hover:-translate-y-1 hover:scale-110 duration-300"
        >
          Read our story
        </a> */}
      </section>

      {/* Partnership section */}
      <section
        className="fourth-wrapper bg-white flex flex-col justify-center items-center px-20 gap-y-12"
        style={{
          backgroundImage: `url(${backgroundPartnership})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          // change image opacity using new image
        }}
      >
        <h2 className="title text-headingTwo text-center">Partnership</h2>
        <h3 className="sub-title text-headingThree text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </h3>
        <a
          href="/"
          className="shop-button text-bodyTwo bg-sun font-bold hover:-translate-y-1 hover:scale-110 duration-300"
        >
          Contact via WhatsApp
        </a>
      </section>
      <Closing />
    </div>
  );
}

export default Home;
