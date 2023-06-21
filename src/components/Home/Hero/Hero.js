import React, { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero__container" id="Home">
      <div className="hero__name">
        <h1>Full Stack Development Showcase</h1>
      </div>
      {/* <div class="typewriter">
        <h1>Vidura Ravindranath()</h1>
      </div> */}
      <div className="hero__job">
        <p>
          I'm a <span>Full Stack Developer</span>
        </p>
      </div>
      <div className="hero__des">
        <h4>
          We are a team of 400 engineers, doers and creatives in Norway, Sri
          Lanka, Malaysia, and Brazil ready to accelerate your awesome idea to
          market.
        </h4>
      </div>
      <div className="btn">
        <button className="hero__btn">Download CV</button>
        <button className="hireme__btn">Hire Me</button>
      </div>
    </div>
  );
}

export default Hero;
