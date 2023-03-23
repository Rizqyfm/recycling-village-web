import React from "react";
import Closing from "../../Closing";
import background from "../../img/background.png";
import Banner from "../../Banner";
import backgroundPartnership from "../../img/frame.png";
import productCatalogue from "../../img/catalogues.png";
// import { HashLink as Link } from "react-router-hash-link";

// import backgroundPersonDoodles from "../../img/framee.png";
// import productOverview from "../../img/product-overview.png";
// import doodlesLove from "../../img/doodles-love.png";
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
        <section className="hero-words flex flex-col gap-y-7 items-center">
          {/* <a
            href="/"
            className="shop-button text-bodyThree border-[1px] border-sun  hover:pointer duration-300 text-white text-center items-center shadow-[0px_0px_10px_#F5EA07]"
            target="_blank"
            rel="noopener noreferrer"
          >
            RV is partnering with WWF
            <i class="fa-solid fa-arrow-right ml-3 text-white"></i>
          </a> */}
          <h1 className="title text-headingOne text-center font-semibold">
            Crafting trash into treasure, one stitch at a time
          </h1>
          <h2 className="sub-title text-headingThree text-center text-white">
            Recycling Village is not just a brand, it’s a movement that empowers
            people to act and make a difference. Join us on our mission to save
            Mother Earth and All Mothers in rural villages of Indonesia.
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
            <i class="fa-solid fa-link ml-3"></i>
          </a>
        </section>
      </section>

      <Banner />

      {/* Product section */}
      <section className="second-wrapper flex flex-row justify-start items-center bg-secondary">
        <section className="second-left w-3/5">
          <img
            className="product-overview"
            src={productCatalogue}
            alt="product-overview"
          ></img>
        </section>
        <section className="second-right flex flex-col items-start justify-center gap-y-12 bg-hopeful h-screen w-3/6 pl-10 ">
          <h2 className="title text-headingTwo text-left text-primary">
            Crafted with love, <br />
            by women in rural villages of Indonesia
          </h2>
          <h3 className="sub-title text-headingThree">
            One-of-a-kind functional responsible piece of art.
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
          It takes a village to drive change. <br /> Connect with us for
          partnership and collaboration that puts <br />
          The Planet & The People first.
        </h3>
        {/* <h3 className="sub-title text-headingThree text-center text-white">
          Connect with us for partnership and collaboration that puts The Planet
          & The People first.
        </h3> */}
        <a
          href="https://wa.me/6281388454540"
          className="shop-button text-bodyTwo bg-sun font-bold hover:-translate-y-1 hover:scale-110 duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact via WhatsApp
        </a>
      </section>
      <Closing />
    </div>
  );
}

export default Home;
