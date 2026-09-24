import "../style/Home.css";
import { Link } from "react-router-dom";
import {
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

// import resume from "../assets/SANAM_MAHARJAN_Full_Stack_Developer.pdf";
import profile from "../assets/Sanam.jpg";

function Home() {
  return (
    <section className="home">

      <div className="home-left">

        <p className="greeting">
          👋 Hello, I'm
        </p>

        <h1>
          Sanam <span>Maharjan</span>
        </h1>

        <h2>
          Full Stack Developer | Frontend Developer | Backend Developer | Software Developer
        </h2>

        <p className="summary">
          Passionate Full Stack Developer with experience building modern,
          responsive, and scalable web applications using React.js,
          JavaScript (ES6+), TypeScript, Python, Node.js, Express.js,
          Flask, FastAPI, PostgreSQL, and MongoDB.
        </p>

        <p className="summary">
          I enjoy solving real-world problems through clean, maintainable
          code and creating intuitive user experiences. My background in
          production control and quality engineering has strengthened my
          analytical thinking, troubleshooting, collaboration, and
          continuous improvement mindset.
        </p>

        <p className="summary">
          I am currently pursuing a Machine Learning Certificate at the
          University of Maryland Global Campus while expanding my skills in
          AI, cloud technologies, and modern software engineering.
        </p>

        <div className="looking">
          <strong>🚀 Currently Open To:</strong>

          <div className="badges">
            <span>Full Stack Developer</span>
            <span>Frontend Developer</span>
            <span>Backend Developer</span>
            <span>Software Engineer</span>
            <span>Python Developer</span>
            <span>React Developer</span>
          </div>
        </div>

        <div className="tech-stack">
          <strong>Tech Stack</strong>

          <p>
            React • JavaScript • TypeScript • HTML5 • CSS3 • Tailwind CSS •
            Bootstrap • Node.js • Express.js • Python • Flask • FastAPI •
            PostgreSQL • MongoDB • REST APIs • Git • GitHub • Docker •
            Machine Learning
          </p>
        </div>

        <div className="home-buttons">

          {/* <a href={resume} download className="btn-primary">
            <FaDownload />
            Download Resume
          </a> */}

          <Link to="/contact" className="btn-secondary">
            <FaEnvelope />
            Contact Me
          </Link>

        </div>

        <div className="social-icons">

          {/* <a
            href="https://github.com/sanamcha"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/sanam-maharjan"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a> */}

        </div>

      </div>

      <div className="home-right">

        <img
          src={profile}
          alt="Sanam Maharjan"
        />

      </div>

    </section>
  );
}

export default Home;