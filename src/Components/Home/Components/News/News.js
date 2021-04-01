import React from "react";
import "./News.css";

function News() {
  const news = [
    {
      news_date: "26.03.2021",
      news_title: "Уважаемые абоненты!",
      news_description: (
        <span>
          {" "}
          4 апреля 2021 года заканчивает своё действие программа {' '}
          <span className="promotion_special_symbol">{"<<"}</span>
          бонус 3000 МБ при первой регистрации в Beepul
          <span className="promotion_special_symbol">{">>"}</span>, которая
          стартовала 20.05.2020.
        </span>
      ),
    },
    {
      news_date: "25.03.2021",
      news_title: "Уважаемые абоненты!",
      news_description: (
        <span>
          Стажировка <span className="promotion_special_symbol">{"<<"}</span>
          Третье поколение
          <span className="promotion_special_symbol">{">>"}</span> - это
          идеальная возможность для студентов 3-4 курсов опробовать свои знания
          на практике и начать карьеру в крупнейшей международной
          телекоммуникационной компании.
        </span>
      ),
    },
    {
      news_date: "26.03.2021",
      news_title: "В такой солнечный день обязательно должна быть хорошая новость!",
      news_description: (
        <span>
          По вашим многочисленным просьбам, мы продлеваем акцию
          <span className="promotion_special_symbol">{"<<"}</span>
          {' '}Скидка 80% на золотые номера
          <span className="promotion_special_symbol">{">>"}</span>
          {' '}до конца марта!
        </span>
      ),
    },
  ];

  return (
    <div className="news_container_main">
      <h2>Новости</h2>
      <div className="news_container">
        {news.map((el, id) => (
          <div key={id} className="news">
            <p>{el.news_date}</p>
            <h3>{el.news_title}</h3>
            <p>{el.news_description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
