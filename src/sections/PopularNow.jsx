import React from "react";
import Card from "../components/Card";

import { popular } from "../constants/coffee_data";
const PopularNow = () => {
  return (
    <div className="padding bg-coffee">
      <div className=" sm:m-auto max-sm:mt-44  sm:bg-dark-coffee flex flex-col flex-wrap sm:gap-14 justify-start padding-y  sm:px-10 px-6 sm:rounded-[60px] ">
        <h3 className="font-poppins font-semibold text-[32px] pl-6 text-black max-sm:mb-5 tracking-wide">
          Popular{" "}
          <span className="border-b-2 border-primary tracking-wide inline">
            Now
          </span>
        </h3>
        <div className="flex md:flex-row flex-col justify-center gap-5 max-sm:m-auto ">
          {popular.slice(0, 3).map((item) => {
            return <Card key={item.id} item={item} desc={false} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularNow;
