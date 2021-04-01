import React, { useState } from "react";
import img1 from "./images/firstImg.webp";
import img2 from "./images/SecondImg.webp";
import img3 from "./images/thirdImg.webp";
import "./Section_2.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyLoad from 'react-lazyload'
import "react-lazy-load-image-component/src/effects/blur.css";

const images = [
  {
    img_url: img1,
  },
  {
    img_url: img2,
  },
  {
    img_url: img3,
  },
];

function Section2() {
  const full_image = React.createRef();
  let [source, setSource] = useState(0);
  const switch_image = (id) => {
    const full_image_short = full_image.current;
    full_image_short.style.opacity = 0;
    setTimeout(() => {
      setSource(id);
    }, 350);
    setTimeout(() => {
      full_image_short.style.opacity = 1;
    }, 500);
  };

  return (
    <div className="section-2">
      <div className="section-container">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={(e) => switch_image(i)}
            className="img-container"
          >
              <LazyLoadImage effect="blur" src={img.img_url} alt="news" />
            <div className="counter-container">
              <span>{i + 1}</span>
            </div>
          </div>
        ))}
      </div>
      <div ref={full_image} className="full-image-container">
        <LazyLoad height={600}>
        <img src={images[source].img_url} alt="full" />
        </LazyLoad>
      </div>
    </div>
  );
}

export default Section2;
