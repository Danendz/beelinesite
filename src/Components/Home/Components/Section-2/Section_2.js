import React, {useState} from "react";
import img1 from "./images/firstImg.webp";
import img2 from "./images/SecondImg.webp";
import img3 from "./images/thirdImg.webp";
import "./Section_2.css";

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
    const switch_image = (id)=>{
        const full_image_short = full_image.current;
        full_image_short.style.opacity = 0;
        console.log(full_image.current)
        setTimeout(() => {
            setSource(id)
        }, 350);
        setTimeout(() => {
            full_image_short.style.opacity = 1;
        }, 400);
    }
  return (
    <div className="section-2">
      <div className="section-container">
        {images.map((img, i) => (
          <>
            <div onClick={(e)=> switch_image(i)} className="img-container">
              <img src={img.img_url} alt="news" />
              <div className="counter-container">
                <span>{i + 1}</span>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="full-image-container">
        <img ref={full_image} src={images[source].img_url} alt="full" />
      </div>
    </div>
  );
}

export default Section2;
