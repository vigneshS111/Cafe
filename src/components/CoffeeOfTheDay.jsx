import React from "react";
import coffee1 from "../assets/coffee1.jpg";
import star from "../assets/star.png";
const CoffeeOfTheDay = ({ coffee, discount, rating }) => {
  return (
    <div className="padding relative font-poppins w-[440px] mt-7 z-0">
      <img
        src={coffee1}
        className="sm:w-[350px] w-[300px] h-[300px] sm:h-[350px] object-cover rounded-[50%] absolute top-0"
      />
      <div className="text-secondary bg-white absolute top-14 sm:left-11 left-5 px-6 py-3 rounded-[42px] font-semibold shadow-3xl">
        {coffee}
      </div>
      <div className="text-secondary  bg-white absolute sm:top-[250px] top-[230px] sm:left-11 left-9 px-6 py-3 rounded-[42px] font-semibold shadow-3xl">
        Discount - <span className="font-satisfy">{discount}%</span>
      </div>
      <div className="flex items-center gap-1 text-secondary bg-white absolute top-24 sm:right-0 right-12 px-6 py-3 rounded-[42px] font-semibold shadow-3xl">
        {rating} <img src={star} className="inline w-[18px] h-[18px]" />
      </div>
    </div>
  );
};

export default CoffeeOfTheDay;
