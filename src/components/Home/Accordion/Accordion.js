import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import "./Accordion.css";
import { motion } from "framer-motion";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const accordionItems = [
    {
      title: "What motivated you to specialize in React.js and Node.js?",
      content:
        "My strong interest in React.js and Node.js stems from their popularity, ease of learning, and ability to create impressive user interfaces. Additionally, my positive internship experience has further fueled my motivation to specialize in these technologies. I firmly believe that React.js and Node.js offer immense potential for shaping the future of web development.",
    },
    {
      title: "How many years of experience do you have with React?",
      content:
        "I have been actively working with React.js for one year. During this time, I have gained hands-on experience in developing various projects, both professionally and through personal initiatives. I have leveraged React.js to build interactive and responsive user interfaces, implement state management, handle data flow, and integrate with backend APIs.",
    },
    {
      title:
        "Have you worked with any other technologies that complement React.js and Node.js?",
      content:
        "Yes, in addition to React.js and Node.js, I have also worked with several technologies that complement them. One of them is Redux, which is a predictable state management library for JavaScript applications. It works seamlessly with React.js and helps in managing the application's state in a centralized and efficient manner. I have also utilized Express.js, a popular web application framework for Node.js, to build robust and scalable server-side APIs. Express.js simplifies the process of handling routes, middleware, and requests, making it an excellent choice for building RESTful APIs. Moreover, I have experience with MongoDB, a NoSQL database that integrates well with Node.js. It offers flexibility and scalability, allowing me to efficiently store and retrieve data for my applications. Another technology I have worked with is GraphQL. It provides a more efficient and flexible alternative to traditional REST APIs, enabling clients to request specific data requirements and reducing over-fetching or under-fetching of data. These technologies, along with React.js and Node.js, form a powerful and cohesive stack for building modern web applications. My experience with them has strengthened my understanding of the ecosystem and my ability to create robust and efficient solutions",
    },
    {
      title:
        "What testing methodologies and frameworks have you used in your projects?",
      content:
        "In my previous projects, I have utilized a combination of testing methodologies and frameworks to ensure the quality and reliability of the software. Some of the methodologies I have employed include: Unit Testing: I have extensively used unit testing to verify the functionality of individual components or modules within the application. Integration Testing: To validate the interaction and compatibility between various components of the system, I have employed integration testing. This involves testing the integration points, APIs, and data flows between different modules. Tools such as Postman have been valuable in this regard.",
    },

    {
      title:
        "Do you have experience working in agile development environments?",
      content:
        "During my time at university, I studied agile principles and methodologies extensively through relevant courses and collaborative projects. I learned about the iterative and incremental approach of agile, the importance of frequent communication and collaboration within cross-functional teams, and the value of adaptability and continuous improvement",
    },
  ];
  return (
    <div className="accordion__container" id="FAQ">
      <div className="project__header">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ y: [50, 0], opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.1 }}
        >
          FAQ
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ y: [50, 0], opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.1 }}
        >
          Frequently Asked <span>Questions</span>
        </motion.h1>
        <div className="project__desc">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ y: [50, 0], opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.1 }}
          >
            If you're curious to learn more about me, this section provides a
            closer look into my background, skills, and experiences.
          </motion.p>
        </div>
      </div>
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
