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
  return (
    <div className="shop_home_main_container">
      <div
        onClick={() => {
          arrow === "" ? setArrow("arrow_rotate") : setArrow("");
          height === ""
            ? setHeight("shop_home_item_container_height")
            : setHeight("");
        }}
        className="shop_home_title"
      >
        <h2>Магазин</h2>
        <i className={`fas fa-chevron-down ${arrow}`}></i>
      </div>

    </div>
  );
}

export default ShopHome;
