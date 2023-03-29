import React from "react";
import { FaChevronDown } from "react-icons/fa";
const Hero = () => {
  return (
    <section className="flex min-h-screen relative items-stretch overflow-hidden justify-center">
      <div
        className="absolute top-0 left-0 right-0 bottom-0"
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      ></div>
      <div className="container flex items-center justify-start relative">
        <div className="w-full">
          <div
            className="text-center mx-auto max-w-[30em]"
            style={{ color: "rgb(239, 194, 179)" }}
          >
            <h1
              className="mb-4 uppercase font-bold text-4xl"
              style={{ letterSpacing: "4px" }}
            >
              a console for every workflow
            </h1>
            <p>Discover the perfect console for yours.</p>
          </div>
        </div>
        <a href="#next" className="absolute  bottom-4  w-full">
          <span className="sr-only">scroll to the next section </span>

          <FaChevronDown className="text-3xl text-center w-full text-white" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
