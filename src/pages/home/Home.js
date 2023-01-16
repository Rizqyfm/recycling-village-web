import React from "react";
import background from "../../img/background.png";

function Home() {
  return (
    <div
      className="content flex flex-col justify-center gap-y-12"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <section className="hero-wrapper flex flex-col items-center gap-y-12">
        <section className="hero-words flex flex-col gap-y-7">
          <h1 className="title sm:text-sm text-headingOne text-center font-bold">
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
            className="hero-cta text-bodyTwo bg-sun font-bold hover:-translate-y-1 hover:scale-110 duration-300"
          >
            Shop our product
          </a>
          <p>or</p>
          <a
            href="/"
            className="hero-cta text-bodyTwo text-aire hover:-translate-y-1 hover:scale-110 duration-300"
          >
            Read our story
          </a>
        </section>
      </section>
    </div>
  );
}

export default Home;
