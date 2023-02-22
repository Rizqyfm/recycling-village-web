import React from "react";
import Closing from "../../Closing";
import background from "../../img/background.png";
import Banner from "../../Banner";
// import backgroundPersonDoodles from "../../img/framee.png";
import backgroundPartnership from "../../img/frame.png";
// import productOverview from "../../img/product-overview.png";
// import doodlesLove from "../../img/doodles-love.png";
import productCatalogue from "../../img/catalogues.png";
// import backgroundProduct from "../../img/background-product-section.png";
// import doodlesHijab from "../../img/doodles-hijab.png";
// import doodlesLongHair from "../../img/doodles-longhair.png";

function Home() {
  return (
    <div className="home-wrapper">
      {/* Hero section */}
      <section
        className="hero-wrapper h-screen flex flex-col justify-center items-center gap-y-12 bg-white px-20 bg-aire"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }}
      >
        <section className="hero-words flex flex-col gap-y-7">
          <h1 className="title text-headingOne text-center font-semibold">
            Creating treasures out of plastic waste, and you can have it.
          </h1>
          <h2 className="sub-title text-headingThree text-center text-white">
            We sell bags, wallets, tote bags, and many moreee. <br /> Which you
            probably love.
          </h2>
        </section>

        <section className="hero-ctas flex flex-col items-center gap-y-1">
          <a
            href="https://drive.google.com/file/d/1pHfBIIOlWzr_JWL2utTmHfsrergriw7n/view?usp=share_link"
            className="shop-button text-bodyTwo bg-sun font-bold hover:-translate-y-1 hover:scale-110 duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more about us
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

      <Banner />

      {/* Product section */}
      {/* <section className="second-wrapper flex flex-row justify-center items-center pr-20 bg-secondary">
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
          <h3 className="sub-title text-headingThree">
            Colorful, playful, joyful, and absolutely, high quality.
          </h3>
          <img className="doodles-love" src={doodlesLove} alt="doodles"></img>
        </section>
      </section> */}

      {/* Product 2 */}
      {/* <section
        className="product2 h-screen bg-white px-20"
        style={{
          backgroundImage: `url(${productCatalogue})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></section> */}

      <section className="second-wrapper flex flex-row justify-start items-center bg-secondary">
        <section className="second-left">
          <img
            className="product-overview"
            src={productCatalogue}
            alt="product-overview"
          ></img>
        </section>
        <section className="second-right flex flex-col   items-start justify-center gap-y-12 ml-20 bg-hopeful h-screen pl-10 ">
          <h2 className="title text-headingTwo text-left text-primary">
            Handcrafted, <br /> by local woman.
          </h2>
          <h3 className="sub-title text-headingThree">
            Colorful, playful, joyful, and absolutely, high quality.
          </h3>
          <a
            href="https://wa.me/c/6281388454540"
            className="shop-button text-bodyTwo bg-sun font-bold hover:-translate-y-1 hover:scale-110 duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop our catalogues
          </a>
        </section>
      </section>

      {/* Partnership section */}
      <section
        className="fourth-wrapper flex flex-col justify-center items-center px-20 gap-y-12 bg-aire"
        style={{
          backgroundImage: `url(${backgroundPartnership})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // change image opacity using new image
        }}
      >
        <h2 className="title text-headingTwo text-center">Partnership</h2>
        <h3 className="sub-title text-headingThree text-center text-white">
          We have partnered with government, non profit organization (NGO), and
          private company. <br /> Thinking about collaborating with us? Hit us
          up!
        </h3>
        <a
          href="https://wa.me/6281388454540"
          className="shop-button text-bodyTwo bg-sun font-bold hover:-translate-y-1 hover:scale-110 duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact via WhatsApp
        </a>
      </section>
      {/* About section */}
      {/* <section
        className="third-wrapper bg-hopeful h-screen flex flex-col justify-center items-center px-20 gap-y-12"
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
            <p className="text-headingFour text-center font-bold">Impact</p>
            <p className="text-bodyTwo text-center">
              Recycle more than 1000kg of plastics
            </p>
          </section>
          <section className="about-box bg-white flex flex-col justify-center">
            <p className="text-headingFour text-center font-bold">Community</p>
            <p className="text-bodyTwo text-center">
              Empowered 20 woman to work with us
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
        <a
          href="/"
          className="shop-button text-bodyTwo bg-sun font-bold hover:-translate-y-1 hover:scale-110 duration-300"
        >
          Read our story
        </a>
      </section> */}
      <Closing />
    </div>
  );
}

export default Home;
