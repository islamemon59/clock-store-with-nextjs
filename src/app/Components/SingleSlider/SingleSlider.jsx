"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const SingleSlider = ({ images }) => {
  return (
    <div className="w-full h-[100%] overflow-hidden shadow-md rounded-xl relative">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        speed={1000}
        slidesPerView={1}
        allowTouchMove={false}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} className="relative w-full h-full">
            <div
              className={`w-full h-full overflow-hidden relative ${
                i % 2 === 0 ? "animate-slide-in-right" : "animate-slide-in-left"
              }`}
            >
              <img
                src={img}
                alt={`slider ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
