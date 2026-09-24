

import "../style/Projects.css";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import recipeImg from "../assets/recipe-app.png";
import cocktailImg from "../assets/cocktail-app.png";
import newsImg from "../assets/news-app.png";
import aiInterviewCoachImg from "../assets/ai-interview-coach.png";

const projects = [
  {
    title: "AI Interview Coach",
    image: aiInterviewCoachImg,
    description:
      "An interview practice application featuring top interview questions to help users prepare for interviews.",
    technologies: ["Python", "Flask", "SQL Database", "React", "JavaScript"],
    github: "https://github.com/sanamcha/AI-interview-coach",
    demo: "https://ai-interview-coach-tn7k.onrender.com/dashboard", 
  },
  {
    title: "Food-Recipe-App",
    image: recipeImg,
    description:
      "A responsive React application that allows users to search recipes using the MealDB API.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "REST API",
    ],
    github: "https://github.com/sanamcha/Food-Recipe-Training-App",
    demo: "https://idiotic-cord.surge.sh",
  },

  {
    title: "Cocktail App",
    image: cocktailImg,
    description:
      "Search cocktails by name, ingredient and category using TheCocktailDB API.",
    technologies: [
      "React",
      "Axios",
      "React Router",
      "REST API",
    ],
    github: "https://github.com/sanamcha/cocktail-app",
    demo: "https://cocktails-app-lyart-zeta.vercel.app/",
  },

  {
    title: "News App",
    image: newsImg,
    description:
      "Python application that fetches and displays the latest news from an external News API.",
    technologies: [
      "Python",
      "Flask",
      "REST API",
      "Bootstrap",
    ],
    github: "https://github.com/sanamcha/Capstone-Projects-News-App",
    demo: " https://projects-breaking-news-app.onrender.com/",
  },


];

function Projects() {
  return (
    <section className="projects">
      <div className="projects-title">
        <h1>My Projects</h1>

        <p>
          Here are some of the projects I've built using
          React, JavaScript, Python, Flask, and REST APIs.
        </p>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (

          <div className="project-card" key={project.title}>

            {project.image && (
              <img
                src={project.image}
                alt={project.title}
              />
            )}

            <div className="project-content">

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <div className="tech-stack">

                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}

              </div>

              <div className="project-links">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}

              </div>

            </div>

          </div>

        ))}

      </div>
    </section>
  );
}

export default Projects;
