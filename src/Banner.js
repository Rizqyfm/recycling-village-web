import React from "react";
import Marquee from "react-fast-marquee";

function Banner() {
  return (
    <section className="moving-banner bg-primary flex justify-around py-2 gap-x-12">
      <Marquee speed={60} gradient={false}>
        <section className="banner-text text1 text-secondary flex justify-around gap-x-12 w-screen">
          <span>Recycled</span>
          <span>Sustainable</span>
          <span>Fashionable</span>
          <span>Mantep</span>
        </section>
      </Marquee>
    </section>
  );
}

export default Banner;
