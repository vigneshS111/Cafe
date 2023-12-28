import { FreeMode } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { popular } from "../constants/coffee_data";
import Card from "../components/Card";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
const Swipper = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[FreeMode]}
      spaceBetween={15}
      freeMode
      centeredSlides
      centeredSlidesBounds
      slidesPerView="auto"
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {popular.slice(0, 3).map((item) => {
        return (
          <SwiperSlide key={item.id} style={{ width: "35%", height: "auto" }}>
            <Card key={item.id} width="275px" height="260px" item={item} />;
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default Swipper;
