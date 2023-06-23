import React, { useState } from "react";
import "./Contact.css"; // Import your CSS file for styling
import { useRef } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact__container" id="Contact">
      <div className="tech__title">
        <h2>Technologies</h2>
        <h1>Programming Languages and Frameworks</h1>
        <div className="tech__desc">
          <p>
            I'm a UI Designer with 8 years of experience creating engaging
            interfaces for web and mobile applications.
          </p>
        </div>
      </div>
      <form className="contact-form" onSubmit={sendEmail} ref={form}>
        <h2>Contact Me</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" value={message} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
