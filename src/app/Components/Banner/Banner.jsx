"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import slides from "./Components/SliderData/SliderData";

export default function Banner() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      effect="fade"
      speed={1000}
      className="w-full h-[60vh] md:h-[80vh]"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="relative w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
