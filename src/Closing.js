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
      <div className="closing bg-secondary py-10 px-10 flex flex-row justify-around">
        <p className="text-headingTwoHalf text-left italic font-poppins">
          We have recyled around
        </p>
        <p className="counting-number text-headingTwoHalf text-left italic font-bold">
          {counterOn && (
            <CountUp start={0} end={120000} duration={2} delay={0} />
          )}
        </p>
        <p className="text-headingTwoHalf text-left italic font-poppins">
          pieces of plastic bags
        </p>
      </div>
    </ScrollTrigger>
  );
}

export default Closing;
