import React from "react";
import "./New_tariffs.css";
import Tariff from "../../../Reusable/Tariff";
import zor_2 from "./Images/zor_j_3.webp";
import zor_10 from "./Images/zor_j_10.webp";
import zor_6 from "./Images/zor_j_7.webp";
import zor_15 from "./Images/zor_j_15.webp";

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

  return (
    <div className="new-tariffs">
      <div className="tariffs-title">
        <h1>Новые Тарифы</h1>
      </div>
      <div className="tariffs-main-container">
        {tariffs.map((tariff, i) => (
          <Tariff length={tariffs.length} tariff={tariff} i={i} />
        ))}
      </div>
    </div>
  );
}

export default New_tariffs;
