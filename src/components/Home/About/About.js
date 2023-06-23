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
          <Grid
            direction="column"
            className="about__desc"
          >
            <Grid item>
              <h2>About Me</h2>
              <h1>Bring Ideas to Life Through Design</h1>
            </Grid>
            <Grid item>
              <p>
                I'm a UI Designer with 8 years of experience creating engaging
                interfaces for web and mobile applications. I prioritize user
                experience and am committed to staying up-to-date with the
                latest trends and technologies. I work collaboratively with
                clients and team members to ensure that each project meets the
                unique needs and goals of the client. Let's create something
                great together! I'm a UI Designer with 8 years of experience
                creating engaging interfaces for web and mobile applications.
                <br /> <br /> I prioritize user experience and am committed to
                staying up-to-date with the latest trends and technologies. I
                work collaboratively with clients and team members to ensure
                that each project meets the unique needs and goals of the
                client. Let's create something great together!
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
