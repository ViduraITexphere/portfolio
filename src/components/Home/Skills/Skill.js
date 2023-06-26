import React from "react";
import "./Skill.css";
import { MdAppSettingsAlt } from "react-icons/md";

function Skill({ label }) {
  return (
    <div className="container">
      <div className="skill__container" id="Skills">
        <div>
          <h2>Skills</h2>
          <h1>Things I'm Good at</h1>
          <div className="skill__desc">
            <p>
              I'm a UI Designer with 8 years of experience creating engaging
              interfaces for web and mobile applications. I prioritize user
              experience and am committed.
            </p>
          </div>
        </div>
      </div>
      <div class="card__container">
        <div className="card__wrapper">
          <div className="frontend__icon">
            <img src="https://i.postimg.cc/TwDmTFs8/setting.gif" alt="" />
          </div>
          <div className="frontend__desc">
            <h2>Backend Development</h2>
            <p>
              I'm a UI Designer with 8 years of experience creating engaging
              interfaces.
            </p>
          </div>
        </div>
        <div class="card__wrapper">
          <div className="frontend__icon">
            <img src="https://i.postimg.cc/Jtwkyq9y/html.gif" alt="" />
          </div>
          <div className="frontend__desc">
            <h2>Frontend Development</h2>
            <p>
              I'm a UI Designer with 8 years of experience creating engaging
              interfaces.
            </p>
          </div>
        </div>

        <div class="card__wrapper">
          <div className="frontend__icon">
            <img src="https://i.postimg.cc/ZYLn6Jp7/monitor.gif" alt="" />
          </div>
          <div className="frontend__desc">
            <h2>UI UX Designing</h2>
            <p>
              I'm a UI Designer with 8 years of experience creating engaging
              interfaces.
            </p>
          </div>
        </div>
        <div class="card__wrapper">
          <div className="frontend__icon">
            <img src="https://i.postimg.cc/1t3mHqpv/database.gif" alt="" />
          </div>
          <div className="frontend__desc">
            <h2>Database Managment</h2>
            <p>
              I'm a UI Designer with 8 years of experience creating engaging
              interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
