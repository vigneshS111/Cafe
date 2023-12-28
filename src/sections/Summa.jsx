<div className="">
  <Swiper
    slidesPerView="auto"
    spaceBetween={20}
    freeMode
    centeredSlides
    centeredSlidesBounds
    modules={[FreeMode]}
    className="mt-4"
  >
    <SwiperSlide
      style={{ width: "auto", height: "auto" }}
      className="shadow-lg animate-slideright"
    >
      <div className="w-[275px] h-[260px] shadow-3xl bg-slate-500">1</div>
    </SwiperSlide>
    <SwiperSlide
      style={{ width: "auto", height: "auto" }}
      className="shadow-lg animate-slideright"
    >
      <div className="w-[275px] h-[260px] shadow-3xl bg-slate-500">2</div>
    </SwiperSlide>
    <SwiperSlide
      style={{ width: "auto", height: "auto" }}
      className="shadow-lg animate-slideright"
    >
      <div className="w-[275px] h-[260px] shadow-3xl bg-slate-500">3</div>
    </SwiperSlide>
  </Swiper>
</div>;
