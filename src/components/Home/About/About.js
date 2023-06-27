import { Grid } from "@mui/material";
import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <Grid container className="about__container" id="About">
        <Grid item xs={12} md={12}>
          <Grid direction="column" className="about__desc">
            <Grid item>
              <h2>About Me</h2>
              <h1>What Kind of Developer Am I?</h1>
            </Grid>
            <Grid item>
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
                During my previous internship, I had the opportunity to work on
                a conference system where I utilized React.js, Node.js,
                Socket.io, GraphQL, and WebRTC. This project allowed me to gain
                hands-on experience with REST APIs and databases such as
                MongoDB, SQL, MySQL, and Firebase. During my university years, I
                worked on several projects using .NET. I am passionate about
                innovation and continuously seek opportunities to enhance my
                skills in the software engineering field.
              </p>
            </Grid>
          </Grid>
        </Grid>

        <Grid item className="profile__container animated">
          <Grid item className="avatar">
            <img src="https://i.postimg.cc/mkkQzBbh/Frame-2.png" alt="" />
          </Grid>
          <Grid item className="profile__title">
            <h2>Vidura Ravindranath</h2>
            <h3>Software Engineer Associate</h3>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
