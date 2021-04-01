import React from "react";
import "./NewPromotions.css";
import img1 from "./images/img1.webp";
import img2 from "./images/img2.webp";
import PreloadImage from "react-preload-image";

function NewPromotions() {
  const promotions = [
    {
      promotion_img: img1,
      promotion_start_date: "27.01.2021",
      promotion_end_date: "31.03.2021",
      promotion_name: (
        <>
          <span className="promotion_special_symbol">{"<<"}</span>ЗОЛОТАЯ
          <span className="promotion_special_symbol">{">>"}</span> акция от
          Beeline!
        </>
      ),

      promotion_description: (
        <span>
          Акция на <span className="promotion_special_symbol">{"<<"}</span>
          золотые<span className="promotion_special_symbol">{">>"}</span> номера
          со скидкой 90% продолжается!"
        </span>
      ),
    },
    {
      promotion_img: img2,
      promotion_start_date: "23.07.2020",
      promotion_end_date: "30.04.2021",
      promotion_name: "Пригласи друга!",
      promotion_description: "Приглашайте своих друзей в BEELINE CLUB 2.0!",
    },
  ];
  return (
    <div className="promotions_main_container">
      <h2>Акции</h2>
      <div className="promotions_container">
        {promotions.map((promotion, i) => (
          <div key={i} className="promotion">
            <PreloadImage
              lazy
              className="promotion_img"
              src={promotion.promotion_img}
              alt={promotion.promotion_name}
            />
            <div className="promotion_description">
              <div className="promotion_description_date">
                <span>{promotion.promotion_start_date}</span>
                <span>{promotion.promotion_start_date}</span>
              </div>
              <h2>{promotion.promotion_name}</h2>
              <p>{promotion.promotion_description}</p>
            </div>
            <div className="promotion_more">
              <button>Подробнее</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewPromotions;
