import "../style/Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaCode,
  FaServer,
  FaChartBar,
  FaProjectDiagram,
  FaBrain,
  FaDatabase,
  FaChartLine,
  FaCog,
  FaSearch,


} from "react-icons/fa";

import {
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiFlask,
  SiTailwindcss,
  SiJira,
  SiPostman,
  SiVercel,
  SiDocker,
  SiJenkins,
  SiGithubactions,
  SiRender,
  SiNetlify,
  // SiHeroku,
  SiNginx,
  SiFastapi,
  SiNumpy,
  SiPandas,

  SiScikitlearn,
  SiJupyter,
  SiTensorflow,

} from "react-icons/si";

const skills = [
  {
    title: "Frontend Development",
    items: [
      { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
      { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
      { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
      { name: "React.js", icon: <FaReact color="#61DAFB" /> },
      { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" /> },
    ],
  },

  {
    title: "Backend Development",
    items: [
      { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Python", icon: <FaPython color="#3776AB" /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "FastAPI", icon: <SiFastapi color="#009688" /> },
      { name: "REST APIs", icon: "🔗" },
      // { name: "JSON", icon: <FaCode color="#F7DF1E" /> },
    ],
  },

  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
    ],
  },

  {
    title: "Developer Tools",
    items: [
      { name: "Git", icon: <FaGitAlt color="#F05032" /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: "💻" },
      { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
      { name: "JIRA", icon: <SiJira color="#0052CC" /> },
      { name: "npm", icon: "📦" },
      { name: "REST APIs", icon: "🔗" },
      { name: "Responsive Design", icon: "📱" },
    ],
  },
{
  title: "Machine Learning & Data Science",
  items: [
    { name: "Python", icon: <FaPython color="#3776AB" /> },
    { name: "NumPy", icon: <SiNumpy color="#013243" /> },
    { name: "Pandas", icon: <SiPandas color="#150458" /> },
    { name: "Matplotlib", icon: <FaChartBar color="#11557C" /> },
    { name: "Scikit-learn", icon: <SiScikitlearn color="#F7931E" /> },

    { name: "Data Cleaning", icon: <FaDatabase color="#38bdf8" /> },
    { name: "Data Visualization", icon: <FaChartLine color="#22c55e" /> },
    // { name: "Feature Engineering", icon: <FaCog color="#f59e0b" /> },

    { name: "Regression", icon: <FaChartLine color="#3b82f6" /> },
    { name: "Classification", icon: <FaProjectDiagram color="#8b5cf6" /> },
    { name: "Clustering", icon: <FaProjectDiagram color="#06b6d4" /> },

    // { name: "Model Evaluation", icon: <FaSearch color="#ef4444" /> },
    // { name: "Cross Validation", icon: <FaBrain color="#ec4899" /> },
    // { name: "Hyperparameter Tuning", icon: <FaCog color="#10b981" /> },
// 
    // { name: "Machine Learning Pipelines", icon: <FaBrain color="#6366f1" /> },
  ],
},
  {
  title: "Cloud & Deployment",
  items: [
    { name: "Docker", icon: <SiDocker color="#2496ED" /> },
    { name: "GitHub Actions", icon: <SiGithubactions color="#2088FF" /> },
    { name: "Jenkins", icon: <SiJenkins color="#D24939" /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Netlify", icon: <SiNetlify color="#00C7B7" /> },
    { name: "Render", icon: <SiRender color="#46E3B7" /> },
    // { name: "Heroku", icon: <SiHeroku color="#430098" /> },
    { name: "Nginx", icon: <SiNginx color="#009639" /> },
  ],
},

];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-title">
        <h2>My Skills</h2>
        <p>
          Technologies and tools I use to build modern, responsive, and
          scalable full-stack web applications.
        </p>
      </div>

      <div className="skills-container">
        {skills.map((category) => (
          <div className="skill-card" key={category.title}>
            <h3>{category.title}</h3>

            <div className="skill-list">
              {category.items.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <span className="icon">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;