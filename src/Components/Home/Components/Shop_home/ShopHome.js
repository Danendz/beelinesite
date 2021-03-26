import React, { useState } from "react";
import "./ShopHome.css";
import img1 from "./images/img1.webp";
import img2 from "./images/img2.webp";
import img3 from "./images/img3.webp";
import img4 from "./images/img4.webp";

function ShopHome() {
  const shop_items = [
    {
      item_name: "Xiaomi Redmi 9 3/32GB Gray EU",
      item_img: img1,
      item_cost: "1 799 000",
    },
    {
      item_name: "HUAWEI Y8P 9 4/128GB (Blue)",
      item_img: img2,
      item_cost: "2 565 000",
    },
    {
      item_name: "Realme 6 (4/128GB) White",
      item_img: img3,
      item_cost: "2 414 000",
    },
    {
      item_name: "Samsung Galaxy S20 Gray",
      item_img: img4,
      item_cost: "10 496 000",
    },
  ];

  let [arrow, setArrow] = useState("");
  let [height, setHeight] = useState("");
  let [translate, setTranslate] = useState(0);
  let [displayArrow, setDisplayArrow] = useState("none");
  const shop_home_main_container = React.createRef();

  return (
    <div ref={shop_home_main_container} className="shop_home_main_container">
      <div
        onClick={() => {
          arrow === "" ? setArrow("arrow_rotate") : setArrow("");
          if (height <= 0) {
            if (
              getComputedStyle(shop_home_main_container.current).width > "653px"
            ) {
              setHeight(437);

            } else {
              setHeight(166.5 * shop_items.length);

            }
            setDisplayArrow("flex");
          } else {
            setHeight(0);
            setDisplayArrow("none");
          }
        }}
        className="shop_home_title"
      >
        <h2>Магазин</h2>
        <i className={`fas fa-chevron-down ${arrow}`}></i>
      </div>

      <div
        style={{
          transform: `translateX(${translate}px)`,
          height: `${height}px`,
        }}
        className="items_container"
      >
        {shop_items.map((item, id) => (
          <div key={id} className="shop_item">
            <div className="item_info">
              <img src={item.item_img} alt={item.item_name} />
              <p>{item.item_name}</p>
            </div>
            <div className="item_cost">
              <span>{item.item_cost} Сум</span>
            </div>
          </div>
        ))}
      </div>
      <div
        onClick={() => {
          if (
            getComputedStyle(shop_home_main_container.current).width > "653px"
          ) {
            if (translate >= 0) {
              setTranslate((-262 * shop_items.length) / 2);
            } else {
              setTranslate(translate + 262);
            }
          }
        }}
        style={{ display: displayArrow }}
        className="arrow-shop arrow-left"
      >
        <i className="fas fa-chevron-left "></i>
      </div>
      <div
        onClick={() => {
          if (
            getComputedStyle(shop_home_main_container.current).width > "653px"
          ) {
            if (translate <= (-262 * shop_items.length) / 2) {
              setTranslate(0);
            } else {
              setTranslate(translate - 262);
            }
          }
        }}
        style={{ display: displayArrow }}
        className="arrow-shop arrow-right"
      >
        <i className="fas fa-chevron-right "></i>
      </div>
    </div>
  );
}

export default ShopHome;
