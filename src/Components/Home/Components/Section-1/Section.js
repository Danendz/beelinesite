import React from "react";
import { NavLink } from "react-router-dom";
import './Section.css';
function Section() {
  return (
    <div className="section">
      <NavLink className="section-btn internet" to="/internet">
        <img
          src="https://beeline.uz/binaries/content/gallery/mainsite/icons/internet/internet-traffic-standart.svg"
          alt="Интернет"
        />
        Интернет
      </NavLink>
      <NavLink className="section-btn pick" to="/pick-number">
        <img
          src="https://beeline.uz/binaries/content/gallery/nomer_uz.png"
          alt="Выбор Номера"
        />
        Выбор Номера
      </NavLink>
      <NavLink className="section-btn tariff" to="/tariffs">
        <img
          src="https://beeline.uz/binaries/content/gallery/mainsite/banners/tarif.svg"
          alt="Тарифы"
        />
        Тарифы
      </NavLink>
      <NavLink className="section-btn pay" to="/pay">
        <img
          src="https://beeline.uz/binaries/content/gallery/mainsite/icons/one-balance.svg"
          alt=" Пополнить Счёт"
        />
        Пополнить Счёт
      </NavLink>
      <NavLink className="section-btn apps" to="/apps">
        <img
          src="https://beeline.uz/binaries/content/gallery/mainsite/icons/phones-and-devices.svg"
          alt="Приложения"
        />
        Приложения
      </NavLink>
    </div>
  );
}

export default Section;
