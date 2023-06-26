import { Grid } from "@mui/material";
import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      {/* <div className="about__container" id="About">
        <div>
          <h2>About Me</h2>
          <h1>Bring Ideas to Life Through Design</h1>
          <p>
            I'm a UI Designer with 8 years of experience creating engaging
            interfaces for web and mobile applications. I prioritize user
            experience and am committed to staying up-to-date with the latest
            trends and technologies. I work collaboratively with clients and
            team members to ensure that each project meets the unique needs and
            goals of the client.Let's create something great together! I'm a UI
            Designer with 8 years of experience creating engaging interfaces for
            web and mobile applications.
            <br /> <br /> I prioritize user experience and am committed to
            staying up-to-date with the latest trends and technologies. I work
            collaboratively with clients and team members to ensure that each
            project meets the unique needs and goals of the client.Let's create
            something great together!
          </p>
        </div>
        <div className="porofile__img">
          <img src="https://i.postimg.cc/mkkQzBbh/Frame-2.png" alt="" />
        </div>
      </div> */}

      <Grid container className="about__container" id="About">
        <Grid item xs={12} md={9}>
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
        <Grid item xs={12} md={3} className="porofile__img">
          <img src="https://i.postimg.cc/mkkQzBbh/Frame-2.png" alt="" />
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
