import React from "react";
import moviesData from "../utils/mockData";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const Settings = {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "2",
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: { delay: 3000 },
  pagination: { clickable: true },
  modules: [EffectCoverflow, Autoplay],
};

const LoginSlider = () => {
  return (
    <div className="flex items-center justify-center h-[570px] w-7/12 overflow-hidden p-8">
      <Swiper {...Settings} className="w-full h-full object-contain">
        {moviesData.map((item, idx) => (
          <SwiperSlide key={idx} className="relative">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-[500px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LoginSlider;
