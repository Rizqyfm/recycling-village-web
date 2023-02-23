import React from "react";
import Marquee from "react-fast-marquee";

function Banner() {
  return (
    <section className="moving-banner bg-primary flex justify-around py-2 gap-x-12">
      <Marquee speed={60} gradient={false}>
        <section className="banner-text text1 text-secondary text-bodyTwo font-ibarra flex justify-around w-screen">
          <span>♻️ Recycled Plastic Waste ♻️</span>
          <span>👩🏻‍🤝‍👩🏽 Empower Underrepresented Women in Indonesia 👩🏻‍🤝‍👩🏽 </span>
          <span>💚 A Responsible Production 💚 </span>
          <span>🌏 For The Planet and The People 🌏 </span>
        </section>
      </Marquee>
    </section>
  );
}

export default Banner;
