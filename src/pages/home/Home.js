import React from "react";
import Closing from "../../Closing";
import background from "../../img/background.png";
import Banner from "../../Banner";
import backgroundPartnership from "../../img/frame.png";
import productCatalogue from "../../img/catalogues.png";
// import { HashLink as Link } from "react-router-hash-link";

function Home() {
  return (
    <div className="home-wrapper">
      {/* Hero section */}
      <section
        className="hero-wrapper flex flex-col justify-center gap-y-12 px-6 h-screen md:px-10 lg:px-14 bg-aire"
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
          <h1 className="title text-headingTwo text-left font-semibold md:text-headingTwo lg:text-headingOne lg:hidden ">
            Crafting trash into treasure, one stitch at a time
          </h1>
          <h1 className="title title-desktop hidden lg:block text-headingThree text-center font-semibold md:text-headingTwo lg:text-headingOne ">
            Crafting trash into treasure,
            <br /> one stitch at a time
          </h1>
          <h2 className="sub-title text-left text-white text-bodyOne md:text-bodyOne lg:text-headingFour lg:text-center lg:w-4/6">
            Recycling Village is not just a brand, it’s a movement that empowers
            people to act and make a difference. Join us on our mission to save
            Mother Earth and All Mothers in rural villages of Indonesia.
          </h2>
        </section>

        <section className="hero-ctas flex flex-col items-start lg:items-center gap-y-1">
          <a
            href="https://drive.google.com/file/d/1pHfBIIOlWzr_JWL2utTmHfsrergriw7n/view?usp=share_link"
            className="shop-button text-bodyThree md:text-bodyTwo bg-sun font-bold hover:-translate-y-1 hover:scale-110 duration-300"
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
      <section className="second-wrapper flex flex-col justify-start items-center bg-hopeful lg:flex-row ">
        <section className="second-left w-full">
          <img
            className="product-overview max-h-full lg:max-h-full"
            src={productCatalogue}
            alt="product-overview"
          ></img>
        </section>
        <section className="second-right flex flex-col items-start md:items-start justify-center gap-y-6 px-6 py-16 md:px-10 lg:px-14 lg:gap-y-10">
          <h2 className="title text-headingTwoHalf text-primary text-left lg:text-headingTwoHalf">
            Crafted with love, by women in rural villages of Indonesia
          </h2>
          <h3 className="sub-title text-bodyOne text-left lg:text-headingFour">
            One-of-a-kind functional responsible piece of art.
          </h3>
          <a
            className="shop-button text-bodyThree md:text-bodyTwo bg-sun font-bold hover:-translate-y-1 hover:scale-110 duration-300"
            href="https://tokopedia.link/recyclingvillage"
            smooth
            activeStyle
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop our catalogues
          </a>
          {/* <Link
            className="shop-button text-bodyTwo bg-sun font-bold hover:-translate-y-1 hover:scale-110 duration-300"
            to="/Shop"
            smooth
            activeStyle
          >
            <button className=""> Shop our catalogues blala</button>
          </Link> */}
        </section>
      </section>

      {/* Partnership section */}
      <section
        className="fourth-wrapper flex flex-col justify-center items-start px-6 gap-y-6 py-32 md:px-10 md:py-20 lg:items-center lg:px-14 lg:py-32 lg:gap-y-10 bg-aire"
        style={{
          backgroundImage: `url(${backgroundPartnership})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="title text-headingTwoHalf lg:text-headingTwo">
          Partnership
        </h2>
        <h3 className="sub-title text-bodyOne text-white lg:text-headingThree lg:text-center">
          It takes a village to drive change. <br /> Connect with us for
          partnership and collaboration that put The Planet & The People first.
        </h3>
        <section className="partnership-button flex flex-wrap justify-start gap-x-4 gap-y-4">
          <a
            href="https://wa.me/6281388454540"
            className="shop-button text-bodyThree md:text-bodyTwo bg-sun font-bold hover:-translate-y-1 hover:scale-110 duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact via WhatsApp
          </a>
          <a
            href="https://drive.google.com/file/d/1FNXg438begrIiTt70m-vKcQCo1f3ZcrP/view?usp=drivesdk"
            className="shop-button border border-sun text-white text-bodyThree md:text-bodyTwo font-bold hover:-translate-y-1 hover:scale-110 duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bulk order catalog
          </a>
        </section>
      </section>
      <Closing />
    </div>
  );
}

export default Home;
