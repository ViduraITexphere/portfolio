import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./Accordion.css";
import { motion } from "framer-motion";

const AccordionItem = ({ title, content, isActive, onClick }) => {
  const icon = isActive ? faMinus : faPlus;

  return (
    <div className={`accordion-item ${isActive ? "active" : ""}`}>
      <motion.div
        className="accordion-header"
        onClick={onClick}
        initial={{ opacity: 0 }}
        whileInView={{ x: [50, 0], opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <FontAwesomeIcon icon={icon} style={{ color: "#c09eff" }} />
        <span className="accordion-title">{title}</span>
      </motion.div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default AccordionItem;
