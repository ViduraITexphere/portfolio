import React, { useEffect, useState } from "react";
import "./Hero.css";
import "./Cards/Cards.css";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { FaHandshake } from "react-icons/fa";
import { Link } from "react-scroll";

function Hero() {
  const [mobile, setMobile] = useState(false);
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

  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 0.5,
      },
    },
  };

  const [scrollStarted, setScrollStarted] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 2) {
        setScrollStarted(true);
      } else {
        setScrollStarted(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollStarted) {
      controls.start({ opacity: 1, y: mobile ? -70 : -40 });
    } else {
      controls.start({ opacity: 0, y: 10 });
    }
  }, [scrollStarted, controls, mobile]);

  const browserWidth = window.innerWidth;
  useEffect(() => {
    if (browserWidth) {
      if (browserWidth < 900) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }
  }, [browserWidth]);

  return (
    <div>
      <div
        className="hero__container"
        id="Home"
        style={{
          backgroundImage:
            "url(https://github.githubassets.com/images/modules/site/security/grid2.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: "0",
        }}
      >
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
          <motion.p variants={moveVariants} animate="animation">
            I'm a <span>Full Stack Developer</span>
          </motion.p>
        </div>
        <div className="hero__des">
          <h4>
            As a Full Stack Developer, I thrive on the challenge of bridging the
            gap between design and functionality, ensuring that every element of
            a web application works harmoniously.
          </h4>
        </div>
        <div className="btn">
          <button
            className="hero__btn"
            onClick={() => {
              downloadFileAtURL(PDF_FILE_URL);
            }}
          >
            <HiDownload className="download__icon" size={24} />
            Download CV
          </button>
          <Link to="Contact">
            <button className="hireme__btn">
              <FaHandshake className="hireme__icon" size={24} />
              Hire Me
            </button>
          </Link>
        </div>
      </div>
      <motion.div
        className="skill__tabs"
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        <div className="skill__tab">
          <img src="https://i.postimg.cc/KctPk3Mr/devops-1.png" alt="skills" />
          <h3>Frontend Development</h3>

          <div className="skill__tab__desc">
            <p>
              As a frontend developer, I have a strong command of HTML, CSS,
              JavaScript and React JS. I specialize in creating responsive and
              visually interfaces.
            </p>
          </div>
        </div>
        <div className="skill__tab">
          <img src="https://i.postimg.cc/CKyDxFx6/software.png" alt="skills" />
          <h3>Backend Development</h3>
          <div className="skill__tab__desc">
            <p>
              In backend development, I excel in building server-side
              applications using Node.js, Express.js, and MongoDB.
            </p>
          </div>
        </div>
        <div className="skill__tab">
          <img src="https://i.postimg.cc/xCQ9CZH2/strategy.png" alt="skills" />
          <h3>UI/UX Designing</h3>
          <div className="skill__tab__desc">
            <p>
              I create engaging and intuitive digital experiences with a strong
              focus on aesthetics and user-centric design principles.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
