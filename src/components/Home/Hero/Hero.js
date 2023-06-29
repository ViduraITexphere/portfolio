import React, { useEffect, useState } from "react";
import "./Hero.css";
import { motion } from "framer-motion";
function Hero() {
  const PDF_FILE_URL = "http://localhost:3000/file_resume.pdf";
  const downloadFileAtURL = (url) => {
    console.log("Downloading file at:", url);
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

  const moveVarients = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 0.5,
      },
    },
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
        zIndex: "0",
      }}
    >
      <div className="hero__overlay"></div> {/* Add this overlay element */}
      <motion.div
        className="hero__name"
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h1>Full Stack Development Showcase</h1>
      </motion.div>
      {/* <div class="typewriter">
        <h1>Vidura Ravindranath()</h1>
      </div> */}
      <div className="hero__job">
        <motion.p variants={moveVarients} animate="animation">
          I'm a <span>Full Stack Developer</span>
        </motion.p>
      </div>
      <motion.div
        className="hero__des"
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [-25, 0], opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h4>
          As a Full Stack Developer, I thrive on the challenge of bridging the
          gap between design and functionality, ensuring that every element of a
          web application works harmoniously.
        </h4>
      </motion.div>
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
