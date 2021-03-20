import React from "react";
import { NavLink } from "react-router-dom";
import "./New_tariffs.css";
import zor_2 from './Images/zor_3.webp';
import zor_10 from './Images/zor_10.webp';
import zor_6 from './Images/zor_7.webp';
import zor_15 from './Images/zor_15.webp';

function New_tariffs() {
  const tariffs = [
    {
      id: 0,
      tariffName: `zo'r 10`,
      tariffImg: zor_10,
      tariffDescription: {
        cost: "50 000",
        minutes: <i className="fas fa-infinity"> </i>,
        megabytes: "10 000",
        sms: "5 000",
      },
    },
    {
      id: 1,
      tariffName: `zo'r 15`,
      tariffImg: zor_15,
      tariffDescription: {
        cost: "70 000",
        minutes: <i className="fas fa-infinity"> </i>,
        megabytes: "15 000",
        sms: "5 000",
      },
    },
    {
      id: 2,
      tariffName: `zo'r 2`,
      tariffImg: zor_2,
      tariffDescription: {
        cost: "20 000",
        minutes: "2 000",
        megabytes: "2 000",
        sms: "2 000",
      },
    },
    {
      id: 3,
      tariffName: `zo'r 6`,
      tariffImg: zor_6,
      tariffDescription: {
        cost: "35 000",
        minutes: <i className="fas fa-infinity"> </i>,
        megabytes: "6 000",
        sms: "5 000",
      },
    },
  ];

  const open_func = (tariff, arrow, more, tariff_description) => {
    if (tariff.className === "tariff-description-container") {
      tariff.style.display = "block";

      setTimeout(() => {
        tariff.style.height = "369px";
      }, 100);

      setTimeout(() => {
        more.style.opacity = 1;
        tariff_description.style.opacity = 1;
        tariff.style.height = "fit-content";
      }, 300);
      
      tariff.className = "tariff-description-container opened";
      arrow.className = "fas fa-angle-double-up arrow";
    } else {
      more.style.opacity = 0;
      tariff_description.style.opacity = 0;
      tariff.style.height = "369px";
      setTimeout(() => {
        tariff.style.height = "0";
      }, 250);
      setTimeout(() => {
        tariff.style.display = "none";
      }, 550);
      tariff.className = "tariff-description-container";
      arrow.className = "fas fa-angle-double-down arrow";
    }
  };
  return (
    <div className="new-tariffs">
      <div className="tariffs-title">
        <h1>Новые Тарифы</h1>
      </div>
      <div className="tariffs-main-container">
        {tariffs.map((tariff) => (
          <div key={tariff.tariffName} className="tariff-content">
            <div className="container-tariff">
              <img
                className="tariff-img"
                src={tariff.tariffImg}
                alt={tariff.tariffName}
              />
              <p className="tariff-name">{tariff.tariffName}</p>
              <div className="tariff-description-container">
                <div className="tariff-description-info">
                  <div className="tariff-description">
                    <img
                      src="https://beeline.uz/binaries//content/gallery/mainsite/icons/money.png/money.png"
                      className="tariff-icon"
                      alt="icon"
                    />
                    <p className="tariff-text">
                      <span className="cost">
                        {tariff.tariffDescription.cost}
                      </span>
                      <span> сум eжемесячная абонентская плата</span>
                    </p>
                  </div>
                  <div className="tariff-description">
                    <img
                      src="https://beeline.uz/binaries//content/gallery/mainsite/icons/out-call.png/out-call.png"
                      className="tariff-icon calls-icon"
                      alt="icon"
                    />
                    <p className="tariff-text ">
                      <span className="calls">
                        {tariff.tariffDescription.minutes}
                      </span>
                      <span>
                        {typeof tariff.tariffDescription.minutes === "object"
                          ? " безлимитные звонки по Узбекистану"
                          : " минуты на исходящие звонки по Узбекистану"}
                      </span>
                    </p>
                  </div>
                  <div className="tariff-description">
                    <img
                      src="https://beeline.uz/binaries//content/gallery/mainsite/icons/internet/internet-traffic-standart.png/internet-traffic-standart.png"
                      className="tariff-icon megabytes-icon"
                      alt="icon"
                    />
                    <p className="tariff-text">
                      <span className="megabytes">
                        {tariff.tariffDescription.megabytes}
                      </span>
                      <span> мегабайт на всё</span>
                    </p>
                  </div>
                  <div className="tariff-description">
                    <img
                      src="https://beeline.uz/binaries//content/gallery/mainsite/icons/sms.png/sms.png"
                      className="tariff-icon sms-icon"
                      alt="icon"
                    />
                    <p className="tariff-text ">
                      <span className="sms">
                        {tariff.tariffDescription.sms}
                      </span>
                      <span> SMS по Узбекистану</span>
                    </p>
                  </div>
                </div>
                <div className="more">
                  <span>
                    <span className="cost">
                      {tariff.tariffDescription.cost}
                    </span>{" "}
                    сум/мес
                  </span>
                  <NavLink
                    className="tariff-links"
                    to={`/tariffs/${tariff.tariffName
                      .replace(`'`, "")
                      .replace(" ", "-")}`}
                  >
                    <button>Подробнее</button>
                  </NavLink>
                </div>
              </div>
              <div
                onClick={(e) => {
                  const container = document.querySelectorAll(
                    ".tariff-description-container"
                  )[tariff.id];
                  const arrow = document.querySelectorAll(".arrow")[tariff.id];
                  const more = document.querySelectorAll(".more")[tariff.id];
                  const tariff_description_info = document.querySelectorAll(
                    ".tariff-description-info"
                  )[tariff.id];
                  open_func(container, arrow, more, tariff_description_info);
                }}
                className="arrow-down"
              >
                <i className="fas fa-angle-double-down arrow"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default New_tariffs;
