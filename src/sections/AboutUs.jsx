import React from "react";
import coffee3 from "../assets/coffee3.png";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <div
      id="aboutUs"
      className="flex sm:flex-row flex-col sm:px-24 xl:px-28 px-8 py-14 justify-between md:gap-60 gap-10 w-full bg-coffee"
    >
      <img src={coffee3} className="object-contain sm:w-[370px] sm:h-[310px]" />

      <div className="flex flex-col justify-start gap-6">
        <h3 className="font-poppins font-semibold text-[32px]  text-black max-sm:mb-5">
          About <span className="border-b-2 border-primary inline">us</span>
        </h3>
        <h4 className="font-poppins font-semibold text-[24px] tracking-wide text-secondary">
          We provide quality coffee, and ready to deliver.
        </h4>
        <p className="font-poppins tracking-wide text-slate-gray text-wrap max-w-[470px]">
          We are a company that makes and distributes delicious drinks. our main
          product is made with a secret recipe and available in stores
          worldwide.
        </p>
        <Link to="/mainMenu">
          <button className="text-primary bg-secondary rounded-3xl px-3 py-2 w-[142px]">
            Get your coffee
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
