import React from "react";
import "./about.css";
import ME from "../../assets/me.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

const about = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Executive member at EEE Association</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>Yet to come</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Projects</h5>
              <small>2 completed</small>
            </article>
          </div>
          <p>
            Hello I am SAtyam KUMAR 
            EEE 2nd year student studying at National Institute of Technology Andhra Pradesh.
            A developer by passion. p.s. In learning stage .
            Dream job at Google 
          </p>
          <a href="#content" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
