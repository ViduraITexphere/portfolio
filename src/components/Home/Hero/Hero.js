import React, { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const PDF_FILE_URL = "http://localhost:3000/file_resume.pdf";
  const downloadFileAtURL = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));

        const filename = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", filename);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <div
      className="hero__container"
      id="Home"
      style={{
        backgroundImage:
          "url(https://i.postimg.cc/59YZ4DSp/15292647-5525305.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: "-1",
      }}
    >
      <div className="hero__overlay"></div> {/* Add this overlay element */}
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
          As a Full Stack Developer, I thrive on the challenge of bridging the
          gap between design and functionality, ensuring that every element of a
          web application works harmoniously.
        </h4>
      </div>
      <div className="btn">
        <button
          className="hero__btn"
          onClick={() => {
            downloadFileAtURL(PDF_FILE_URL);
          }}
        >
          Download CV
        </button>
        <button className="hireme__btn">Hire Me</button>
      </div>
    </div>
  );
}

export default Hero;
