import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import "./Accordion.css";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const accordionItems = [
    {
      title: "What motivated you to specialize in React.js and Node.js?",
      content:
        "A codespace is a development environment that's hosted in the cloud. You can customize your project for GitHub Codespaces by configuring dev container files to your repository (often known as Configuration-as-Code), which creates a repeatable codespace configuration for all users of your project GitHub Codespaces run on a variety of VM-based compute options hosted by GitHub.com, which you can configure from 2 core machines up to 32 core machines. You can connect to your codespaces from the browser or locally using an IDE like Visual Studio Code or IntelliJ.",
    },
    {
      title:
        "What testing methodologies and frameworks have you used in your projects?",
      content:
        "There are a number of entry points to spin up a Codespaces environment. These include: From a template. From your repository for new feature work From an open pull request to explore work-in-progress",
    },
    {
      title:
        "Have you worked with any other technologies that complement React.js and Node.js?",
      content: "Content for Item 3",
    },
    {
      title:
        "Do you have experience working in agile development environments?",
      content: "Content for Item 4",
    },
    {
      title: "What is your preferred programming stack?",
      content: "Content for Item 5",
    },
  ];
  return (
    <div className="accordion__container">
      <div className="accordion">
        {accordionItems.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isActive={index === activeIndex}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
