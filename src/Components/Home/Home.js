import React from "react";
import "./Home.css";
import Slider from "./Components/Slider/Slider";
import Section from "./Components/Section-1/Section";
import NewTariffs from "./Components/New-tariffs/NewTariffs";

function Home() {
  return (
    <div className="home">
      <Slider />
      <Section />
      <NewTariffs />
    </div>
  );
}

export default Home;
