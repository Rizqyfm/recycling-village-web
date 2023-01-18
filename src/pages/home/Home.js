import React from "react";
import background from "../../img/background.png";

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
          <h1 className="title text-headingOne text-center font-bold font-poppins">
            {" "}
            Creating treasures out of plastic waste, and you can have it.{" "}
          </h1>
          <h2 className="sub-title text-headingThree text-center">
            We sell bags, wallets, tote bags, and many moreee. <br /> Which you
            probably love.{" "}
          </h2>
        </section>

        <section className="hero-ctas flex flex-col items-center gap-y-1">
          <a
            href="/"
            className="shop-button text-bodyTwo bg-sun font-bold hover:-translate-y-1 hover:scale-110 duration-300"
          >
            Shop our product
          </a>
          <p>or</p>
          <a
            href="/"
            className="link-button text-bodyTwo hover:-translate-y-1 hover:scale-110 duration-300"
          >
            Read our story
          </a>
        </section>
      </section>

      {/* Product section */}
      <section className="second-wrapper h-screen flex flex-col justify-center items-center gap-y-12">
        <section></section>
        <p>test</p>
      </section>
    </div>
  );
}

export default Home;
