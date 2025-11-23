import React from "react";
import hero from "./hero.png";
import { Link } from "react-router-dom";

interface Props {}

const Hero = (props: Props) => {
  return (
    <section id="hero" className="bg-brand-sand text-brand-forest">
      <div className="container flex flex-col-reverse mx-auto p-8 lg:flex-row">
        <div className="flex flex-col space-y-10 mb-44 m-10 lg:m-10 xl:m-20 lg:mt:16 lg:w-1/2 xl:mb-52">
          <h1 className="text-5xl font-display font-semibold leading-tight tracking-tight text-center lg:text-6xl lg:max-w-md lg:text-left">
            Financial Data with no BS
          </h1>
          <p className="text-2xl text-center text-brand-forest/70 lg:max-w-md lg:text-left leading-relaxed">
            Get market data fast without ads or distractions
          </p>
          <div className="mx-auto lg:mx-0">
            <Link
              to="/search"
              className="py-5 px-10 text-2xl font-display font-semibold text-brand-sand bg-brand-leaf rounded-lg lg:py-4 transition-colors hover:bg-brand-mint"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="mb-24 mx-auto md:w-180 md:px-10 lg:mb-0 lg:w-1/2">
          <img src={hero} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
