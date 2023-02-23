import React from "react";
import productOverview from "../../img/product-overview.png";

function Story() {
  return (
    <div id="story" className="story-wrapper">
      {/* First section */}
      <section className="first-story-wrapper h-screen flex flex-row justify-between items-center gap-y-20 bg-secondary">
        <section className="first-story-left w-1/2 flex flex-col gap-y-12 items-start ml-20">
          <h1 className="title text-headingOne text-left font-bold">
            Oh hi, we're <br /> Recyling Village.
          </h1>
        </section>
        <section className="first-story-right w-1/2">
          <img
            className="product-overview"
            src={productOverview}
            alt="product-overview"
          ></img>
        </section>
      </section>

      <section className="second-story-wrapper h-screen bg-white flex flex-col gap-y-20 px-20">
        <h1 className="text-headingTwo text-center font-source mt-20">
          First of all, WHY ARE WE HERE???
        </h1>
        <p className="text-bodyOne text-left font-ibarra text-primary">
          Citing The World Bank, every year, 4.9 million tons of plastic is
          improperly managed in Indonesia. They are either uncollected or
          disposed in open dumpsites. Rural areas generate the largest amount of
          those mismanaged plastic waste (MPW) due to low waste collection rate.
        </p>
        <section className="flex flex-row">
          <p className="text-headingTwo text-left font-source">
            And this is why we are here darling.
          </p>
          <p className="text-headingTwo text-left font-source">
            And this is why we are here darling.
          </p>
        </section>
        <section className="bg-hopeful my-20">
          <p className="text-headingTwo text-center font-source">
            And this is why we are here darling.
          </p>
        </section>
      </section>
    </div>
  );
}

export default Story;
