import React from "react";
import "./Index.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Skill from "../Skills/Skill";
import Tech from "../Tech/Tech";
function Index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Tech />
    </div>
  );
}

export default Index;
