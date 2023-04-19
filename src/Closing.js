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
      <div className="closing bg-secondary p-6 md:flex-row md:items-center md:py-10 md:justify-center md:gap-x-10">
        <p className="text-bodyOne italic font-poppins text-center md:text-bodyOne lg:text-headingTwoHalf">
          We have recyled around <br />
          {counterOn && (
            <CountUp
              className="font-bold"
              start={1}
              end={120000}
              duration={2}
              delay={0}
            />
          )}{" "}
          <br />
          pieces of plastic bags
        </p>
        {/* <p className="counting-number text-bodyTwo italic font-bold md:text-headingFour lg:text-headingTwoHalf">
          {counterOn && (
            <CountUp start={1} end={120000} duration={2} delay={0} />
          )}
        </p>
        <p className="text-bodyTwo italic font-poppins md:text-bodyOne lg:text-headingTwoHalf">
          pieces of plastic bags
        </p> */}
      </div>
    </ScrollTrigger>
  );
}

export default Closing;
