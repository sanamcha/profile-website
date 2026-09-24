
import "../style/About.css";
import profile from "../assets/Sanam.jpg";
import resume from "../assets/SANAM_MAHARJAN_Full_Stack_Developer.pdf";

function About() {
  return (
    <section className="about" id="about">
      <div className="section-title">
        <h2>About Me</h2>
        <p>Get to know me better.</p>
      </div>

      <div className="about-container">
        {/* Left Side */}
        <div className="about-image">
          <img src={profile} alt="Sanam Maharjan" />
        </div>

        {/* Right Side */}
        <div className="about-content">
          <h3>Hi, I'm Sanam Maharjan 👋</h3>

          <p>
            I'm a <strong>Full Stack Developer</strong> passionate about
            building responsive, user-friendly, and scalable web applications.
            I enjoy solving real-world problems through clean code and modern
            technologies.
          </p>

          <p>
            My technical stack includes <strong>React.js, JavaScript, Node.js,
            Express.js, Python, Flask, PostgreSQL, MongoDB, HTML, CSS,</strong>
            and <strong>REST APIs</strong>. I enjoy developing intuitive user
            interfaces and connecting them with reliable backend services.
          </p>

          <p>
            Before transitioning into software development, I spent several
            years working in production and quality control, where I developed
            strong analytical thinking, attention to detail, problem-solving,
            and teamwork skills. These experiences help me build reliable
            software while collaborating effectively with cross-functional
            teams.
          </p>

          <p>
            I am continuously learning new technologies, improving my coding
            skills, and building real-world projects that strengthen my
            expertise as a full stack developer.
          </p>

          <div className="about-info">
            <div>
              <span>Name:</span>
              <p>Sanam Maharjan</p>
            </div>

            <div>
              <span>Location:</span>
              <p>California, USA</p>
            </div>

            <div>
              <span>Email:</span>
              <p>mhr.sanam@gmail.com</p>
            </div>

            <div>
              <span>Availability:</span>
              <p>Open to Full-Time Opportunities</p>
            </div>
          </div>

          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            // download="SANAM MAHARJAN_Full Stack Developer.pdf"
            className="about-btn"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;





    // function About() {


    // return (
    //     <section id="about">
    //     <div className="about-container">
    //         <h2>About Me</h2>
    //         <p>
    //         Hi, I'm <strong>Sanam Maharjan</strong>, a Full-Stack Developer with experience building
    //         responsive web applications using <strong>React</strong>, <strong>Python</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>HTML</strong>,
    //         and <strong>CSS</strong>. I also have a strong foundation in <strong>Python</strong>, <strong>Flask</strong>, <strong>Machine Learning</strong>,
    //         and <strong>SQL</strong>. My background in production control has strengthened my analytical
    //         thinking and problem-solving skills, which I now apply to software development
    //         and data-driven solutions.
    //         </p>
    //     </div>
    //     </section>
    // );
    // }
    // s
    // export default About;

