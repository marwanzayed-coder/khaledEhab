import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_mpsp7rs",
      "template_d7hgs3x",
      form.current,
      "RvhisOWqtoDArOpvv"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact">
        <form onSubmit={sendEmail} ref={form} autoComplete="off">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Full Name"
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
