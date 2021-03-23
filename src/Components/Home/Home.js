import React from "react";
import "./Home.css";
import Slider from "./Components/Slider/Slider"
import Section from "./Components/Section-1/Section";
import NewTariffs from "./Components/New-tariffs/NewTariffs";
import Section2 from './Components/Section-2/Section_2'


function Home() {
  return (
    <div className="home">
      <Slider />
      <Section />
      <NewTariffs />
      <Section2 />
    </div>
  );
}

export default Home;
