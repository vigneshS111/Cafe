import React from "react";
import Card from "../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import { specialMenu } from "../constants/coffee_data";
const SpecialMenu = () => {
  return (
    <div className=" max-sm:px-4 max-sm:py-12">
      <div className="flex flex-col justify-start items-start padding-y sm:px-36 px-6 gap-12 w-full">
        <h3 className="font-poppins font-semibold text-[32px] tracking-wide text-black max-sm:mb-0">
          Special menu{" "}
          <span className="border-b-2 border-primary inline tracking-wide">
            for you
          </span>
        </h3>
        <div className="md:grid hidden grid-cols-3  grid-rows-2 gap-8">
          {specialMenu.map((item) => {
            return (
              <Card
                key={item.id}
                width="275px"
                height="260px"
                item={item}
                desc={true}
              />
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
        className="mt-4 max-md:block hidden"
      >
        {specialMenu.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{ width: "auto", height: "auto" }}
            className="shadow-lg rounded-full animate-slideright"
          >
            <Card
              key={item.id}
              width="275px"
              height="260px"
              item={item}
              desc={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpecialMenu;
