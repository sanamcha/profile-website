import "../style/Contact.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaDownload,

} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import resume from "../assets/SANAM_MAHARJAN_Full_Stack_Developer.pdf";

function Contact() {
  return (
    <section className="contact">

      <div className="contact-header">
        <h1>Let's Connect</h1>

        <p>
          Thank you for visiting my portfolio. I'm always interested in
          discussing Full Stack Development, Machine Learning, Software
          Engineering opportunities, or collaborating on exciting projects.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h2>Contact Information</h2>

          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>Union City, California, USA</span>
          </div>

          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <a href="tel:+1(510)860-8977">
              +1 (510)860-8977
            </a>
          </div>

          <div className="contact-item">
            <FaEnvelope className="icon" />
            <a href="mailto:mhr.sanam@gmail.com">
              mhr.sanam@gmail.com
            </a>
          </div>

          <div className="resume-button">
            <a href={resume} download>
              <FaDownload />
              Download Resume
            </a>
          </div>

        </div>

        <div className="social-section">

          <h2>Find Me Online</h2>

          <a
            href="https://github.com/sanamcha"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/sanam-maharjan"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="https://x.com/san_mhr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
            X (Twitter)
          </a>

          <a
            href="https://facebook.com/sanamcha"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
            Facebook
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;