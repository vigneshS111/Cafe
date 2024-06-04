import React from "react";
import Card from "../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

import { popular } from "../constants/coffee_data";
const PopularNow2 = () => {
  return (
    <div className="sm:px-16 px-4 sm:py-24 py-12 bg-coffee">
      <div className=" sm:m-auto max-sm:mt-44  sm:bg-dark-coffee flex flex-col flex-wrap sm:gap-14 justify-start padding-y  sm:px-10 px-6 sm:rounded-[60px] max-md:pb-0 ">
        <h3 className="font-poppins font-semibold text-[32px] pl-6 text-black max-sm:mb-5 tracking-wide">
          Popular{" "}
          <span className="border-b-2 border-primary tracking-wide inline">
            Now
          </span>
        </h3>
        <div className="md:flex hidden md:flex-row flex-col justify-center gap-5 xl:gap-10 max-sm:m-auto ">
          {popular.slice(0, 3).map((item) => {
            return (
              <Card key={item.id} width="325px" height="310px" item={item} />
            );
          })}
        </div>
      </div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={15}
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[FreeMode]}
        className="mt-2 max-md:block hidden h-auto"
      >
        {popular.slice(0, 3).map((item) => (
          <SwiperSlide
            key={item.id}
            style={{ width: "auto", height: "auto" }}
            className="shadow-lg rounded-full animate-slideright"
          >
            <Card key={item.id} width="275px" height="260px" item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularNow2;
