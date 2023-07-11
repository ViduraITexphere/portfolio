import React from "react";
import "./Index.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Tech from "../Tech/Tech";
import Project from "../Pro/Project";
import Contact from "../Contact/Contact";
import Accordion from "../Accordion/Accordion";
function Index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Project />
      <Accordion />
      <Contact />
    </div>
  );
}

export default Index;
