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
      <div className="closing bg-sun py-20 px-20 flex flex-row justify-between">
        <p className="text-headingTwo text-left italic font-poppins">
          We've recyled more than
        </p>

        <p className="counting-number text-headingTwo text-left italic font-bold">
          {counterOn && <CountUp start={0} end={1000} duration={3} delay={0} />}
        </p>

        <p className="text-headingTwo text-left italic font-poppins">
          kg of trash
        </p>
      </div>
    </ScrollTrigger>
  );
}

export default Closing;
