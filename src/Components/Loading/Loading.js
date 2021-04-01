import React, {useState} from "react";
import "./Loading.css";
import 'animate.css';
function Loading() {
  const animations = ['animate__bounce', 'animate__pulse', 'animate__rubberBand', 'animate__swing', 'animate__tada', 'animate__wobble', 'animate__flip', ]
  const pickAnimation = () =>{
    let rndnum = Math.floor(Math.random() * animations.length)
    setAnim(animations[rndnum])
  }
  let [anim, setAnim] = useState('animate__bounce');
  return (
    <div className="loading">
      <img
      onLoad={()=> pickAnimation()}
        className={`animate__animated ${anim} animate__infinite`}
        src="https://beeline.uz/webfiles/1599801229801/dist/images/logo.svg"
        alt="Logo"
      />
    </div>
  );
}

export default Loading;
