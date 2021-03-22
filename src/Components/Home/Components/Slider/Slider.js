import React from "react";
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "./Slider.css";

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

function Slider() {
  const main_slider_carousel = [
    {
      imgurl: 'data:image/svg+xml;charset=UTF-8,<svg%20width%3D"800"%20height%3D"400"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20viewBox%3D"0%200%20800%20400"%20preserveAspectRatio%3D"none"><defs><style%20type%3D"text%2Fcss">%23holder_1780d1659f5%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2C%26quot%3BLiberation%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A40pt%20%7D%20<%2Fstyle><%2Fdefs><g%20id%3D"holder_1780d1659f5"><rect%20width%3D"800"%20height%3D"400"%20fill%3D"%23373940"><%2Frect><g><text%20x%3D"289.71875"%20y%3D"221.3">First%20slide<%2Ftext><%2Fg><%2Fg><%2Fsvg>',
      description: "First Image",
    },
    {
      imgurl:
        'data:image/svg+xml;charset=UTF-8,<svg%20width%3D"800"%20height%3D"400"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20viewBox%3D"0%200%20800%20400"%20preserveAspectRatio%3D"none"><defs><style%20type%3D"text%2Fcss">%23holder_1780d1659f5%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2C%26quot%3BLiberation%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A40pt%20%7D%20<%2Fstyle><%2Fdefs><g%20id%3D"holder_1780d1659f5"><rect%20width%3D"800"%20height%3D"400"%20fill%3D"%23373940"><%2Frect><g><text%20x%3D"289.71875"%20y%3D"221.3">First%20slide<%2Ftext><%2Fg><%2Fg><%2Fsvg>',
      description: "Second Image",
    },
    {
      imgurl:
        'data:image/svg+xml;charset=UTF-8,<svg%20width%3D"800"%20height%3D"400"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20viewBox%3D"0%200%20800%20400"%20preserveAspectRatio%3D"none"><defs><style%20type%3D"text%2Fcss">%23holder_1780d1659f5%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2C%26quot%3BLiberation%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A40pt%20%7D%20<%2Fstyle><%2Fdefs><g%20id%3D"holder_1780d1659f5"><rect%20width%3D"800"%20height%3D"400"%20fill%3D"%23373940"><%2Frect><g><text%20x%3D"289.71875"%20y%3D"221.3">First%20slide<%2Ftext><%2Fg><%2Fg><%2Fsvg>',
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
