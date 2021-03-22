import React from "react";
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import img1 from './images/img1.webp;
import img2 from './images/img2.webp;
import img3 from './images/img3.webp;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "./Slider.css";

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

function Slider() {
  const main_slider_carousel = [
    {
      imgurl: img3,
      description: "First Image",
    },
    {
      imgurl:
        img1,
      description: "Second Image",
    },
    {
      imgurl:
        img2,
      description: "Third Image",
    },
  ];
  return (
    <div className="slider">
      <Swiper
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {main_slider_carousel.map((el) => (
          <SwiperSlide key={el.description}>
            <img className="slider-img" src={el.imgurl} alt={el.description} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
