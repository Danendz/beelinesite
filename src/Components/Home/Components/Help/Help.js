import React from "react";
import "./Help.css";

import { NavLink } from "react-router-dom";
function Help() {
  const help = [
    {
      help_img:
        "https://beeline.uz/binaries/content/gallery/mainsite/icons/tariffs-and-services.svg",
      help_description: "Управляй своей связью, не выходя из",
      help_link: "Личного кабинета",
      help_page: "cabinet",
    },
    {
      help_img:
        "https://beeline.uz/binaries/content/gallery/mainsite/icons/support.svg",
      help_description: "",
      help_link: "Мы всегда на связи с вами",
      help_page: "help",
    },
    {
      help_img:
        "https://beeline.uz/binaries/content/gallery/mainsite/icons/info.svg",
      help_description: "",
      help_link: "Все новости",
      help_page: "news",
    },
    {
      help_img:
        "https://beeline.uz/binaries/content/gallery/mainsite/icons/money.svg",
      help_description: "",
      help_link: "Пополняй баланс",
      help_page: "pay",
    },
    {
      help_img:
        "https://beeline.uz/binaries/content/gallery/mainsite/icons/phone.svg",
      help_description: "Будь мобильным - пользуйся приложением Beeline ",
      help_link: "iOS, ",
      help_link2: "Android",
      help_page: "Apps",
    },
  ];
  return (
    <div className="help_container_main">
      {help.map((el, id) => (
        <NavLink key={id} className="help_item" to={el.help_page}>
          <div className="help_item_container">
            <img src={el.help_img} alt={el.help_description} />
            <span>
              {el.help_description} {el.help_link}
              {el.help_link2}
            </span>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default Help;
