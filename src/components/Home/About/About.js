import { Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import { motion, useAnimation } from "framer-motion";

function About() {
  const [scrollStarted, setScrollStarted] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 50) {
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
      controls.start({ opacity: 1, y: -50 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [scrollStarted, controls]);

  return (
    <Grid container className="about__container" id="About">
      <Grid item xs={12} md={9}>
        <Grid direction="column" className="about__desc">
          <motion.Grid
            item
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h2>About Me</h2>
            <h1>What Kind of Developer Am I?</h1>
          </motion.Grid>
          <motion.Grid
            item
            ref={ref}
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <p>
              I am Vidura Ravindranath, a Software Engineer Associate with a
              keen interest in code generation and deep industry knowledge. I
              recently completed my internship and graduated with a degree in
              software engineering. With approximately seven months of
              professional experience, I have primarily focused on using
              React.js as my preferred programming stack. Additionally, I
              possess backend knowledge in Node.js.
              <br />
              <br />
              During my previous internship, I had the opportunity to work on a
              conference system where I utilized React.js, Node.js, Socket.io,
              GraphQL, and WebRTC. This project allowed me to gain hands-on
              experience with REST APIs and databases such as MongoDB, SQL,
              MySQL, and Firebase. During my university years, I worked on
              several projects using .NET. I am passionate about innovation and
              continuously seek opportunities to enhance my skills in the
              software engineering field.
            </p>
          </motion.Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={3} className="porofile__img">
        <img src="https://i.postimg.cc/mkkQzBbh/Frame-2.png" alt="" />
      </Grid>
    </Grid>
  );
}

export default About;
