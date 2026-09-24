import "../style/Experience.css";
import {
  FaBriefcase,
  FaLaptopCode,
  FaTools,
} from "react-icons/fa";

const experiences = [
  {
    icon: <FaLaptopCode />,
    title: "Full Stack Developer",
    company: "Personal Projects & Continuous Learning",
    period: "2023 – Present",
    description: [
    "Developing responsive and user-friendly web applications using React.js, Redux, JavaScript (ES6+),TypeScript, HTML5, CSS3, Bootstrap, and Tailwind CSS.",
    "Building reusable React components using Hooks, Props, State Management, and React Router for scalable single-page applications (SPAs).",
    "Implementing responsive layouts and mobile-first designs to ensure compatibility across desktop, tablet, and mobile devices.",
    "Developing RESTful APIs using Python (Flask) and Node.js with Express.js for frontend-backend integration.",
    "Building full CRUD (Create, Read, Update, Delete) applications with PostgreSQL and MongoDB databases.",
    "Designing and optimizing relational database schemas, writing SQL queries, joins, and performing data validation.",
    "Integrating third-party REST APIs using Fetch API and Axios with proper asynchronous programming (async/await).",
    "Implementing client-side form validation, error handling, loading states, and user-friendly feedback for improved user experience.",
    "Using Git and GitHub for source control, version management, and collaborative development workflows.",
    "Testing and debugging applications using browser Developer Tools, Postman, and console debugging techniques.",
    "Applying responsive UI/UX best practices, reusable component architecture, and clean code principles.",
    "Managing application state using React Hooks and Context API where appropriate.",
    "Following Agile development methodologies, participating in sprint planning, task prioritization, and iterative feature development.",
    "Deploying frontend applications using Vercel and managing environment variables for secure application configuration.",
    "Building portfolio projects including Recipe App, Cocktail App, News App, Tweet Analysis, and other API-driven applications.",
    "Continuously learning modern web technologies, software engineering best practices, design patterns, and data structures to strengthen full stack development skills."
  ]
  },

  {
    icon: <FaBriefcase />,
    title: "Production Control & Quality Control Specialist",
    company: "Tesla",
    period: "2016 – Present",
    description: [
     "Managed daily production schedules to ensure manufacturing targets and customer delivery deadlines were consistently achieved.",
     "Monitored production workflows and identified bottlenecks to improve throughput and operational efficiency.",
     "Performed quality inspections to verify products met engineering specifications and company quality standards.",
     "Analyzed production and quality data to identify trends, defects, and opportunities for continuous improvement.",
     "Conducted root cause analysis of production issues and collaborated with engineering, manufacturing, and quality teams to implement corrective actions.",
     "Worked cross-functionally with production, engineering, logistics, and quality assurance teams to resolve manufacturing issues.",
     "Created and maintained production reports, quality documentation, and performance metrics for management review.",
      "Applied Lean Manufacturing, 5S, and continuous improvement principles to reduce waste and improve productivity.",
      "Verified inventory availability and coordinated material flow to prevent production delays.",
      "Supported new product introductions and process changes while ensuring compliance with quality standards.",
      "Assisted in training new employees on production procedures, quality requirements, and safety practices.",
      "Developed strong analytical, troubleshooting, problem-solving, and decision-making skills in a fast-paced manufacturing environment.",
      "Coordinated production schedules to ensure timely manufacturing and delivery.",
      "Analyzed production data to improve operational efficiency and reduce downtime.",
      "Worked closely with engineering, quality, and manufacturing teams to resolve production issues.",
      "Performed root cause analysis and implemented corrective actions.",
      "Maintained accurate production records and generated performance reports.",
      "Applied Lean Manufacturing and continuous improvement methodologies."
    ]
  },

  {
    icon: <FaTools />,
    title: "CNC Machine Operator",
    company: "Sierra Circuits",
    period: "2014 – 2016",
    description: [
    "Operated CNC drilling, routing, and machining equipment used in printed circuit board (PCB) manufacturing.",
    "Performed machine setup, tooling changes, calibration, and preventive maintenance to ensure optimal machine performance.",
    "Read and interpreted engineering drawings, blueprints, work orders, and technical specifications.",
    "Configured machine parameters to meet production and quality requirements.",
    "Conducted first-article and in-process quality inspections using precision measuring tools.",
    "Identified machine malfunctions and production issues, performing basic troubleshooting to minimize downtime.",
    "Maintained accurate production records and completed manufacturing documentation.",
    "Worked closely with quality assurance and engineering teams to resolve manufacturing defects.",
    "Maintained a clean, organized, and safe work environment following company safety procedures and 5S principles.",
    "Consistently achieved production targets while maintaining high standards of product quality and accuracy.",
    "Developed strong attention to detail, technical troubleshooting, and process improvement skills."
    ]
  },
   {
    icon: <FaBriefcase />,
    title: "Sales & Marketing Representative",
    company: "Commerce Energy",
    period: "2013 – 2014",
    description: [
    
      "Signed up eligible customers after clearly explaining pricing, contract terms, and enrollment details.",
      "Ensured customers fully understood the agreement before completing the enrollment process, resulting in high customer satisfaction.",
      "Consistently met and exceeded daily and weekly sales goals through strong communication and relationship-building skills.",
      "Trained and mentored new sales representatives on customer engagement, product knowledge, and sales techniques.",
      "Prepared and submitted accurate daily sales reports to management.",
      "Participated in daily sales meetings focused on performance metrics, motivation, product updates, and goal setting.",
      "Maintained accurate customer documentation while complying with company policies and industry regulations.",
      "Developed strong negotiation, presentation, problem-solving, and interpersonal communication skills in a fast-paced sales environment."
    ]
  }
];

function Experience() {
  return (
    <section className="experience">
      <div className="experience-header">
        <h1>Experience</h1>

        <p>
          My professional journey combines software development with years of
          experience in manufacturing, quality, and process improvement.
        </p>
      </div>

      <div className="timeline">

        {experiences.map((exp, index) => (

          <div className="timeline-item" key={index}>

            <div className="timeline-icon">
              {exp.icon}
            </div>

            <div className="timeline-content">

              <span className="timeline-period">
                {exp.period}
              </span>

              <h2>{exp.title}</h2>

              <h3>{exp.company}</h3>

              <ul>

                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}

              </ul>

            </div>

          </div>

        ))}

      </div>
    </section>
  );
}

export default Experience;