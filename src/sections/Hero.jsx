import React from "react";
import Button from "../components/Button";
import CoffeeOfTheDay from "../components/CoffeeOfTheDay";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className=" flex justify-between md:flex-row flex-col  sm:pt-36 pt-56 sm:pb-28  py-12 flex-wrap sm:px-20 px-6 bg-coffee ">
      <div className="flex flex-col flexStart gap-5 ">
        <h2 className="font-poppins md:text-[48px] text-[44px] max-sm:w-[380px] font-semibold text-secondary md:leading-[72px] leading-[65px] text-wrap ">
          Enjoy your <span className="text-primary">coffee </span>
          <br className="md:flex hidden" /> before your activity
        </h2>
        <p className="font-poppins text-slate-gray md:w-[400px] w-[270px] text-wrap">
          Boost your productivity and build your mood with a glass of coffee in
          the morning
        </p>
        <div className="flex flex-row gap-8 items-center mt-4">
          <Button />
          <Link to="/mainMenu">
            <p className="text-primary font-bold text-[18px] cursor-pointer">
              More Menu
            </p>
          </Link>
        </div>
      </div>
      <CoffeeOfTheDay coffee="Cappuccino" discount="25" rating="4.8" />
    </div>
  );
};

export default Hero;
