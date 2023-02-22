import React from "react";
import Marquee from "react-fast-marquee";

function Banner() {
  return (
    <section className="moving-banner bg-primary flex justify-around py-2 gap-x-12">
      <Marquee speed={60} gradient={false}>
        <section className="banner-text text1 text-secondary text-bodyTwo font-ibarra flex justify-evenly w-screen">
          <span>💚💚💚 Creating treasures out of plastic waste 💚💚💚 </span>
          <span>💚💚💚 Creating treasures out of plastic waste 💚💚💚 </span>
          <span>💚💚💚 Creating treasures out of plastic waste 💚💚💚 </span>
          <span>💚💚💚 Creating treasures out of plastic waste 💚💚💚 </span>
          {/* <span>Sustainable</span>
          <span>Fashionable</span>
          <span>Joyful</span>
          <span>Recycled</span>
          <span>Sustainable</span>
          <span>Fashionable</span>
          <span>Joyful</span> */}
        </section>
      </Marquee>
    </section>
  );
}

export default Banner;
