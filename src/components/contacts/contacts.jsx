import React from "react";
import "./contacts.css";
import { GoMail } from "react-icons/go";
import { BsMessenger } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
  const Form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_8vmzctn",
      "template_9hi7gjk",
      Form.current,
      "YOUR_PUBLIC_KEY"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch With Me</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <GoMail className="contact__option-icon" />
            <h4>E-mail</h4>
            <h5>satyamvisa3005@gmail.com</h5>
            <a href="mailto:satyamvisa3005@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>kmr_satyam</h5>
            <a href="https://m.me/100023425152966" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>SATYAM</h5>
            <a
              href="https://api.whatsapp.com/send?phone=917023541210"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={Form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your E-mail"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>{" "}
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
