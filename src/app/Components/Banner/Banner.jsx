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
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 md:bg-black/60"></div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="mt-3 sm:mt-4 text-md sm:text-lg md:text-xl lg:text-2xl max-w-2xl">
                {slide.subtitle}
              </p>
              <button className="mt-4 sm:mt-6 bg-blue-600 px-5 py-2 sm:px-6 sm:py-3 rounded-xl text-white font-semibold hover:bg-blue-700 transition shadow-lg">
                {slide.button}
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
