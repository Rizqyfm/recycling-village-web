import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Closing() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="closing bg-secondary flex flex-col gap-y-2 p-6 justify-between items-start md:flex-row md:items-center md:py-10 md:justify-center md:gap-x-10">
        <p className="text-headingFour italic font-poppins md:text-bodyOne lg:text-headingTwoHalf">
          We have recyled around
        </p>
        <p className="counting-number text-headingThree italic font-bold md:text-headingFour lg:text-headingTwoHalf">
          {counterOn && (
            <CountUp start={1} end={120000} duration={2} delay={0} />
          )}
        </p>
        <p className="text-headingFour italic font-poppins md:text-bodyOne lg:text-headingTwoHalf">
          pieces of plastic bags
        </p>
      </div>
    </ScrollTrigger>
  );
}

export default Closing;
