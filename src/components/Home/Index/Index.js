import React from "react";
import "./Index.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Skill from "../Skills/Skill";
import Tech from "../Tech/Tech";
import Project from "../Pro/Project";
import Contact from "../Contact/Contact";
import UserExperience from "../ux/UserExperience";
function Index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Tech />
      <Project />
      {/* <UserExperience /> */}
      <Contact />
    </div>
  );
}

export default Index;
