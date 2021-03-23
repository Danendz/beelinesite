import React, { Suspense} from "react";
import "./Home.css";
import Section from "./Components/Section-1/Section";
import NewTariffs from "./Components/New-tariffs/NewTariffs";

const Slider = React.lazy(() => import("./Components/Slider/Slider.js"));

function Home() {
  return (
    <div className="home">
      <Suspense fallback={<div className="loading">Loading</div>}>
      <Slider />
      </Suspense>
      <Section />
      <NewTariffs />
    </div>
  );
}

export default Home;
