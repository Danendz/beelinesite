import React, { useMemo } from "react";
import img1 from "./images/firstImg.webp";
import img2 from "./images/SecondImg.webp";
import img3 from "./images/thirdImg.webp";
import "./Section_2.css";
import LazyLoad from "react-lazyload";
import PreloadImage from "react-preload-image";

function Section2() {
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
  const full_image = useMemo(
    () => Array.from({ length: images.length }).map(() => React.createRef()),
    [images.length]
  );

  let previousImg = 0;
  const switch_image = (id) => {
    const full_image_short_current = full_image[id].current;
    const full_image_short_previous = full_image[previousImg].current;

    full_image_short_previous.style.opacity = 0;
    setTimeout(() => {
      full_image_short_previous.style.display = "none";
    }, 300);

    setTimeout(() => {
      full_image_short_current.style.display = "block";
    }, 400);
    setTimeout(() => {
      full_image_short_current.style.opacity = 1;
    }, 450);

    previousImg = id;
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
              <PreloadImage className="section_img" src={img.img_url} alt="news" />
         
            <div className="counter-container">
              <span>{i + 1}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="full-image-container">
        {images.map((img, id) => (
          <LazyLoad key={id} height={600}>
            <img
              style={{display: id !== 0 ? 'none' : 'block'}}
              ref={full_image[id]}
              src={img.img_url}
              alt="full"
            />
          </LazyLoad>
        ))}
      </div>
    </div>
  );
}

export default Section2;
