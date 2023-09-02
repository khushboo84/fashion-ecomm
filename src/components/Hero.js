import React from "react";
import imageHero from "../Assets/LandingPageModel.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-pink-400 h-[600px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div>
            <div className="">New Trend</div>
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            AUTOMN SALE STYLISH <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
          <Link
            to={"/"}
            className="self-start font-semibold border-b-2 border-primary"
          >
            Discover More
          </Link>
        </div>
        <div className=" hidden lg:block relative -bottom-32 xl:bottom-16">
          <img className="" src={imageHero} alt="landingpageimage" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
