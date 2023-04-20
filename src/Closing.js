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
      <div className="closing-phone bg-secondary p-6 md:hidden lg:hidden">
        <p className="text-bodyOne italic font-poppins text-center">
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
          pieces of soft plastic waste
        </p>
      </div>

      <div className="closing-tab bg-secondary p-6 hidden md:block lg:hidden">
        <p className="text-bodyOne italic font-poppins text-center">
          We have recyled around &nbsp;
          {counterOn && (
            <CountUp
              className="font-bold"
              start={1}
              end={120000}
              duration={2}
              delay={0}
            />
          )}
          &nbsp; pieces of soft plastic waste
        </p>
      </div>

      <div className="closing-desktop bg-secondary p-6 hidden lg:flex lg:gap-x-12 lg:justify-center">
        <p className="italic font-poppins text-center md:text-bodyOne lg:text-headingFour">
          We have recyled around{" "}
        </p>
        <p className="text-bodyOne italic font-poppins font-bold text-center md:text-bodyOne lg:text-headingFour">
          {counterOn && (
            <CountUp start={1} end={120000} duration={2} delay={0} />
          )}
        </p>
        <p className="text-bodyTwo italic font-poppins text-center md:text-bodyOne lg:text-headingFour">
          pieces of soft plastic waste
        </p>
      </div>
      {/* <p className="text-headingThree italic font-poppins text-justify">
          We have recyled around &nbsp;
          {counterOn && (
            <CountUp
              className="font-bold"
              start={1}
              end={120000}
              duration={2}
              delay={0}
            />
          )}
          &nbsp; pieces of plastic bags

        </p> */}
    </ScrollTrigger>
  );
}

export default Closing;
