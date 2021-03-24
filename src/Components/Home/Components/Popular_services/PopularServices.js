import React, { useMemo } from "react";
import "./PopularServices.css";
import img1 from "./Images/img1.webp";
import img2 from "./Images/img2.webp";
import img3 from "./Images/img3.webp";
import img4 from "./Images/img4.webp";

function PopularServices() {
  const services = [
    {
      img_url: img1,
      service_name: "Beeline TV",
      noLimits_internet: true,
      service_description:
        "Смотрите любимые фильмы, сериалы и ТВ каналы без расхода трафика!",
      is_app: true,
      only_daily: true,
      has_cost: true,
      costs: [
        {
          description: "TV",
          cost: "599",
        },
        {
          description: "IVI",
          cost: "799",
        },
        {
          description: "Национальное",
          cost: "699",
        },
        {
          description: "Megogo",
          cost: "799",
        },
        {
          description: "Start",
          cost: "799",
        },
        {
          description: "Gold(ТВ IVI Национальное)",
          cost: "1 499",
        },
        {
          description: "VIP(ТВ IVI Start Национальное)",
          cost: "1 999",
        },
      ],
    },
    {
      img_url: img2,
      service_name: "Beeline App",
      noLimits_internet: true,
      service_description:
        "Скачивайте приложения и игры без рекламы и расхода трафика!",
      is_app: false,
      only_daily: false,
      has_cost: true,
      costs: [
        {
          cost: "1 299",
        },
        {
          cost: "24 999",
        },
      ],
    },
    {
      img_url: img3,
      service_name: "Beeline Music & Radio",
      noLimits_internet: true,
      service_description:
        "Наслаждайтесь прослушиванием любимой музыки без расхода интернет трафика!",
      is_app: true,
      only_daily: false,
      has_cost: true,
      costs: [
        {
          cost: "599",
        },
        {
          cost: "14 999",
        },
      ],
    },
    {
      img_url: img4,
      service_name: "Перезагрузка",
      noLimits_internet: false,
      service_description: (
        <>
          <br />
          <p>
            Если у вас закончился трафик, включенный в тарифный план, вы можете
            досрочно переподключить тариф и получить полный пакет включенных
            минут, SMS и MB.
          </p>
          <br />
          <p>
            Стоимость услуги «Перезагрузка» на тарифных линейках «ZO'R», «YANGI
            XIT», «XIT», «XIT+» и для тарифов «ALLO», «Bir Oy», «Свободное
            общение», «Bravo MIX», «Click+» - 2 000 сум за каждый запрос.
          </p>
          <br />
          <p>Стоимость услуги «Перезагрузка» для прочих тарифов – 0 сум</p>
          <br />
        </>
      ),
      is_app: false,
      only_daily: false,
      has_cost: false,
      costs: [],
    },
  ];
  const service_container = useMemo(
    () => Array.from({ length: services.length }).map(() => React.createRef()),
    [services.length]
  );
  let last;

  const change_service = (id) => {
    if (last !== undefined) {
      service_container[last].current.style.display = "none";
    }
    const service_container_item = service_container[id].current;

    service_container_item.style.display = "flex";
    last = id;
  };
  return (
    <div className="services_container">
      <div className="service_img_container_main">
        {services.map((el, id) => (
          <div
            key={id}
            onClick={() => change_service(id)}
            className="service_img_container"
          >
            <img src={el.img_url} alt={el.service_name} />
          </div>
        ))}
      </div>
      <div className="service_container_column">
        {services.map((service, id) => (
          <div
            ref={service_container[id]}
            key={id}
            className="service_container"
          >
            <p className="service_name">{service.service_name}</p>
            {service.has_cost === true ? (
              <div className="service_limits_internet">
                <p>
                  {service.noLimits_internet === true
                    ? "БЕЗЛИМИТНЫЙ ИНТЕРНЕТ"
                    : "НЕ БЕЗЛИТНЫЙ ИНТЕРНЕТ"}
                </p>
              </div>
            ) : (
              <></>
            )}

            <span className="service_description">
              {service.service_description}
            </span>
            {service.has_cost === true ? (
              <div className="service_btn_container">
                <button className="service_btn">
                  {service.is_app === true ? "СКАЧАТЬ APK" : "ПЕРЕЙТИ НА САЙТ"}
                </button>
              </div>
            ) : (
              <></>
            )}

            {service.has_cost === true ? (
              <div className="service_description_container">
                {services[id].costs.map((el, i) => (
                  <div key={i} className="service_description_item">
                    <img
                      className="tariff-icon"
                      src="https://beeline.uz/binaries//content/gallery/mainsite/icons/money.svg/money.svg"
                      alt={el.description}
                    />
                    <span className="service_description_text">
                      <strong>{el.cost}</strong>
                      <span> сум/день</span> - {el.description}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
            <div className="services_more">
              <button className="services_more_btn">Подробнее</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularServices;
