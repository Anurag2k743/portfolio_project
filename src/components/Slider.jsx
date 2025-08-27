import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.png";
import leftarrow from "../assets/images/left-arrow.png";

const sliderData = [
  { id: 1, img: slide1, title: "Gradient Overlay" },
  { id: 2, img: slide2, title: "Gradient Overlay" },
  { id: 3, img: slide1, title: "Gradient Overlay" },
  { id: 4, img: slide2, title: "Gradient Overlay" }
];

export default function CustomSlider() {
  return (
    <div className="my-slider">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={2.5}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop={false}  >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div className="slide-card">
                <img src={slide.img} alt={slide.title} className="slide-image" />
                
                {isActive && (
                  <div className="gradient-overlay">
                    <h4>{slide.title}</h4></div>
                )}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slider-controls">
        <button className="custom-prev"><img src={leftarrow} alt="" /></button>
        <button className="custom-next"><img src={leftarrow} alt="" className="right-arrow"/></button>
      </div>
    </div>
  );
}
