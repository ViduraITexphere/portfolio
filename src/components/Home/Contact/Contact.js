import emailjs from "@emailjs/browser";
import "./Contact.css";
import { motion } from "framer-motion";

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
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ x: [-50, 0], opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            Contact
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ x: [-50, 0], opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            Get in Touch with Me{" "}
          </motion.h1>
          <div className="tech__desc">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ x: [-50, 0], opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              If you are interested in further discussion or considering hiring
              me, I would be delighted to connect with you. Please feel free to
              reach out to me at your convenience.
            </motion.p>
          </div>
        </div>

        <motion.div
          className="contact__details"
          initial={{ opacity: 0 }}
          whileInView={{ y: [50, 30], opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div className="contact__details__item">
            <FaPhoneAlt className="icon" />
            <div className="details">
              <h3>Phone</h3>
              <p>+94 776311754</p>
            </div>
          </div>
          <div className="contact__details__item">
            <FaMapMarkerAlt className="icon" />
            <div className="details">
              <h3>Address</h3>
              <p>237/5, Gramodhaya Mw, Alubomulla, Panadura</p>
            </div>
          </div>
          <div className="contact__details__item">
            <FaEnvelope className="icon" />
            <div className="details">
              <h3>Email</h3>
              <p>vidura.in@gmail.com</p>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.form
        className="contact-form"
        onSubmit={sendEmail}
        ref={form}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
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
      </motion.form>
    </div>
  );
};

export default Contact;
