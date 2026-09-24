import "../style/Footer.css";

import profile1 from "../assets/Sanam.jpg";


import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left Side */}
        <div className="footer-left">

          <div className="photo-grid">
            <img src={profile1} alt="Profile 1" />
      
          </div>

          <div className="footer-text">
            <h2>Sanam Maharjan</h2>

            <p>
              Frontend & Full Stack Developer passionate about
              building responsive web applications using React,
              JavaScript, Python, Flask and PostgreSQL.
            </p>
          </div>

        </div>

        {/* Right Side */}

        <div className="footer-right">

          <h3>Connect With Me</h3>

          <a
            href="https://github.com/sanamcha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sanam-maharjan/"
            target="_blank"
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
          >
            <FaFacebook />
            Facebook
          </a>

        </div>

      </div>

      <hr />

      <div className="copyright">
        © {new Date().getFullYear()} Sanam Maharjan. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;