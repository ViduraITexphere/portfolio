import emailjs from "@emailjs/browser";
import "./Contact.css";

import React, { useState, useRef } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const form = useRef(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_br1b728",
        "template_wwux1y9",
        form.current,
        "xRYrHJYiIhFbrUKwH"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact__container" id="Contact">
      <div className="tech__title">
        <div className="contact__data">
          <h2>Contact</h2>
          <h1>Get in Touch with Me </h1>
          <div className="tech__desc">
            <p>
              I'm a UI Designer with 8 years of experience creating engaging
              interfaces for web and mobile applications.
            </p>
          </div>
        </div>

        <div className="contact__details">
          <div className="contact__details__item">
            <FaPhoneAlt className="icon" />
            <div className="details">
              <h3>Phone</h3>
              <p>+91 9876543210</p>
            </div>
          </div>
          <div className="contact__details__item">
            <FaMapMarkerAlt className="icon" />
            <div className="details">
              <h3>Address</h3>
              <p>123 Main Street, City, Country</p>
            </div>
          </div>
          <div className="contact__details__item">
            <FaEnvelope className="icon" />
            <div className="details">
              <h3>Email</h3>
              <p>example@example.com</p>
            </div>
          </div>
        </div>
      </div>
      <form className="contact-form" onSubmit={sendEmail} ref={form}>
        {isSuccess && (
          <p className="success-message">Email sent successfully!</p>
        )}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="user_name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="user_email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
