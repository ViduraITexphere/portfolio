import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./Accordion.css";

const AccordionItem = ({ title, content, isActive, onClick }) => {
  const icon = isActive ? faMinus : faPlus;

  return (
    <div className={`accordion-item ${isActive ? "active" : ""}`}>
      <div className="accordion-header" onClick={onClick}>
        <FontAwesomeIcon icon={icon} style={{ color: "#c09eff" }} />
        <span className="accordion-title">{title}</span>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default AccordionItem;
