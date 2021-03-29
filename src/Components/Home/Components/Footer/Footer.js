import React from "react";
import "./Footer.css";
import facebook from "./icons/facebook.svg";
import instagram from "./icons/instagram.svg";
import twitter from "./icons/twitter.svg";
import odnok from "./icons/odnok.svg";
import youtube from "./icons/youtube.svg";
import telegram from "./icons/telegram.svg";
function Footer() {
  const social_icons = [
    {
      icon: facebook,
      description: "Facebook",
      link: "https://ru-ru.facebook.com/beeline.uz/",
    },
    {
      icon: instagram,
      description: "Instagram",
      link: "https://www.instagram.com/beeline_uzbekistan/",
    },
    {
      icon: twitter,
      description: "Twitter",
      link: "https://twitter.com/beeline_uz",
    },
    {
      icon: odnok,
      description: "Odnoklassniki",
      link: "https://ok.ru/beeline.uz",
    },
    {
      icon: youtube,
      description: "Youtube",
      link: "https://www.youtube.com/channel/UCNs2pdNJbkPYDQt8PSOWC4w",
    },
    {
      icon: telegram,
      description: "Telegram",
      link: "https://t.me/BeelineUzbBot",
    },
  ];
  const sections = [
    {
      section_name: "Мобильная связь",
      section_subsections: [
        "Тарифы",
        "Услуги",
        "Оплата услуг",
        "Акции",
        "Роуминг",
        "Зона покрытия",
        "4G от Beeline",
      ],
    },
    {
      section_name: "Фиксированная связь",
      section_subsections: [
        "Телефоные карты Билайн",
        "Телефоные коды",
        "Установка домашнего телефона",
        "Проводной интернет",
      ],
    },
    {
      section_name: "Приложения и сервисы",
      section_subsections: [
        "Информация и развлечения",
        "Приложение Beeline Uzbekistan",
        "Beeline TV",
        "Beeline Music",
        "Платежный сервис Beepul",
        "Программа Beeline Club 2.0",
        "Data center",
        "Магазин",
      ],
    },
    {
      section_name: "О компании",
      section_subsections: [
        "О нас",
        "Комплаенс",
        "Миссия и подход",
        "Юридические документы",
        "Вакансии",
        "Стажировка",
        "Тендеры",
        "Офисы",
        "Руководство",
        "Как стать дилером",
        "Контакты",
      ],
    },
  ];
  return (
    <div className="footer_main_container">
      <div className="footer_top_container">
        <div className="footer_icons_container">
          {social_icons.map((icon) => (
            <div className="footer_social_icons">
              <a href={icon.link}>
                <img src={icon.icon} alt={icon.description} />
              </a>
            </div>
          ))}
        </div>
        <div className="footer_connection">
          <a className="footer_mail" href="mailto:0611@beeline.uz">
            <button type="button">
              <i className="far fa-envelope"></i>
              <span>Написать нам на почту</span>
            </button>
          </a>
          <div className="call_beeline">
            <i className="fas fa-mobile"></i>
            <div className="number">
              <a href="tel:0611">0611</a>
              <span> Для Beeline</span>
            </div>
          </div>
          <div className="call_everywhere">
            <i className="fas fa-phone-alt"></i>
            <div className="number">
              <a href="tel:(90) 185-00-55">(90) 185-00-55</a>
              <span> С любых номеров</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_middle_container">
        {sections.map((section) => (
          <div className="footer_section">
            <p>{section.section_name}</p>
            {section.section_subsections.map((subsection) => (
              <p>{subsection}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
