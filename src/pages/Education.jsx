import "../style/Education.css";
import Springboard_Certificate from "../assets/springboard-certificate.png";
import eCornellCertificate1 from "../assets/cornell-python-programming.pdf";
import codecademy_CSS from "../assets/Codecademy_CSS.pdf";
import codecademy_HTML from "../assets/Codecademy.pdf";
import codecademy_Bootstrap from "../assets/Codecademy_Bootstrap.pdf";
import udemy_web_developer from "../assets/web-developer-certificate.jpg";
import udemy_python from "../assets/Python_Certification.pdf";
import Character_Certificate from "../assets/Character_Certificate.jpeg";

import {
  FaGraduationCap,
  FaCertificate,
  FaLaptopCode,
  FaChartLine,
  FaExternalLinkAlt,
} from "react-icons/fa";

const education = 
[
  { icon: <FaChartLine />,
    title: "Machine Learning Professional Certificate",
    school: "University of Maryland Global Campus (UMGC)",
    period: "2026 – Present",
    description:
    [
     
      "Developing supervised and unsupervised machine learning models for real-world prediction and classification problems.",
      "Learning data preprocessing techniques including data cleaning, feature engineering, feature scaling, and handling missing values.",
      "Working with Python libraries such as NumPy, Pandas, Matplotlib, Seaborn, and Scikit-learn for data analysis and model development.",
      "Building regression, classification, clustering, and recommendation models using machine learning algorithms.",
      "Evaluating model performance using accuracy, precision, recall, F1-score, ROC-AUC, confusion matrix, and cross-validation.",
      "Implementing feature selection, model tuning, and hyperparameter optimization techniques.",
      "Understanding bias-variance tradeoff, overfitting, underfitting, and model generalization.",
      "Learning end-to-end machine learning workflows including data collection, preprocessing, model training, evaluation, and deployment concepts.",
      "Applying Python programming to automate data analysis and machine learning tasks."
    ]
  },


  {
    icon: <FaLaptopCode />,
    title: "Software Engineering Bootcamp",
    school: "Springboard",
    period: "Completed",
    certificates: [
      {
        name: "Software Engineering Certificate",
        link: "https://www.credential.net/31ad43d9-5d1a-4b96-8ba0-1ec80264f28a#acc.hdcL56vO"
      }
    ],
    description: [
      " 700+ hr of hands-on course material, with 1:1 industry expert mentor oversight. Mastered skills in front-end, back-end web development, databases, data structures and algorithms.",
      "Completed intensive training in Full Stack Web Development.",
      "Built responsive web applications using React.js, JavaScript, HTML5, CSS3, Bootstrap, and Tailwind CSS.",
      "Implemented server-side logic and APIs using Node.js, Express, and Flask.",
      "Designed and managed relational and non-relational databases using PostgreSQL and MongoDB.",
      "Gained experience in version control using Git and GitHub, and collaborative development workflows.",
      "Developed RESTful APIs using Python (Flask) and Node.js with Express.",
      "Created CRUD applications connected to PostgreSQL and MongoDB databases.",
      "Applied Git, GitHub, Agile methodologies, debugging, and software development best practices.",
      "Completed multiple real-world projects using modern web technologies.",
      "Deployed, monitor and maintain applications to cloud platforms and learned about CI/CD pipelines, authentication, and security best practices."
    ]
  },

  {
    icon: <FaCertificate />,
    title: "Python Programming & Data Science Certificate",
    school: "eCornell",
    period: "Completed",
    // certificate: eCornellCertificate1,
    // certificate: "https://mycredentials.ecornell.cornell.edu/credential/odONUAZtJV",
    
    certificates:[
      {
      name: "Python Programming Certificate",
      link: "https://mycredentials.ecornell.cornell.edu/credential/LjCexGzqai"
     },
     {
      name: "Data Science Certificate",
      link: "https://mycredentials.ecornell.cornell.edu/credential/odONUAZtJV"
    },
    ],
    description: [
      "Completed professional certificate program in Python Programming and Data Science.",
      "Worked with Python fundamentals, data structures, object-oriented programming, and file handling.",
      "Performed data analysis using NumPy and Pandas.",
      "Developed problem-solving skills through hands-on programming projects.",
      "Strengthened analytical thinking and data-driven decision making."
    ]
  },

  {
    icon: <FaLaptopCode />,
    title: "Continuous Professional Development",
    school: "Self-Learning & Personal Projects",
    // period: "2024 – Present",
    certificates: [
      {
        name: "Springboard_Certificate",
        link: Springboard_Certificate
      },
      {
        name: "Codecademy_CSS",
        link: codecademy_CSS
      },
      {
        name: "Codecademy_HTML",
        link: codecademy_HTML
      },
      {
        name: "Codecademy_Bootstrap",
        link: codecademy_Bootstrap
      },
      {
        name: "Udemy_Web_Developer",
        link: udemy_web_developer
      },
      {
        name: "Udemy_Python",
        link: udemy_python
      },
    ],
    description: [
      "Continuously expanding knowledge in Full Stack Development.",
      "Building portfolio projects using React.js, Flask, Node.js, PostgreSQL, MongoDB, and REST APIs.",
      "Practicing Data Structures & Algorithms for technical interviews.",
      "Learning TypeScript, software architecture, authentication (JWT), deployment, and cloud technologies.",
      "Following industry best practices, clean code principles, and modern frontend/backend development."
    ]
  },
    {
    icon: <FaGraduationCap />,
    title: "Bachelor's Degree in Industrial Engineering",
    school: "Tribhuvan University, Nepal",
    period: "2006 – 2010",
    certificates: [
      {
        name: "Character_Certificate",
        link: Character_Certificate
      }
    ],
    description: [
      "Graduated with a Bachelor of Industrial Engineering.",
      "Built a strong foundation in mathematics, statistics, operations research, quality management, process optimization, and analytical problem-solving.",
      "Completed engineering coursework focused on data analysis, production systems, and continuous improvement.",
      "GPA: 3.57/4.0"
    ]
  }
];

function Education() {
  return (
    <section className="education">

      <div className="education-header">
        <h1>Education</h1>

        <p>
          My academic background and continuous learning journey that
          support my career as a Full Stack Developer.
        </p>
      </div>

      <div className="education-container">

        {education.map((item, index) => (

          <div className="education-card" key={index}>

            <div className="education-icon">
              {item.icon}
            </div>

            <div className="education-content">

              <span className="education-period">
                {item.period}
              </span>

              <h2>{item.title}</h2>

              <h3>{item.school}</h3>

              <ul>

                {item.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}

              </ul>
              {item.certificates && (
                <div className="certificate-links">
                  {item.certificates.map((certificate, index) => (
                     <a
                    key={index}
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-btn"
                  >
                     <FaExternalLinkAlt />
                      {certificate.name} 
                      
                  </a>
                  ))}
                </div>
            )}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Education;