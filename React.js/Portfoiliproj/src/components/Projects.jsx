import "./Projects.css";

import portfolio from "../assets/Projects/PORTFOLIO.png";
import todo from "../assets/Projects/TODOAPP.png";
import netflix from "../assets/Projects/NETFLIXCLONE.png";
import amazon from "../assets/Projects/AMAZONELITE.png";
import traveler from "../assets/Projects/DEMO_TRAVEL_WEBSITE.png"; // Use your exact filename
import instagram from "../assets/Projects/INSTALOGO.png";
import website from "../assets/Projects/WEBSITE.png";

const projects = [
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A modern personal portfolio with smooth animations, responsive design, and interactive UI.",
    tech: ["React", "CSS", "JavaScript"],
    github: "#",
    live: "#",
  },
  {
    title: "Todo App",
    image: todo,
    description:
      "A task management application with add, edit, delete, and local storage functionality.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#",
  },
  {
    title: "Netflix Clone",
    image: netflix,
    description:
      "A responsive Netflix landing page clone with modern layouts and attractive UI.",
    tech: ["HTML", "CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Amazon Lite",
    image: amazon,
    description:
      "An e-commerce website featuring product cards, search, and responsive layouts.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#",
  },
  {
    title: "Travel Website",
    image: traveler,
    description:
      "A responsive travel website showcasing destinations, packages, and modern UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#",
  },
  {
    title: "Instagram Logo",
    image: instagram,
    description:
      "A pixel-perfect Instagram logo recreated entirely using HTML and CSS.",
    tech: ["HTML", "CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Responsive Website",
    image: website,
    description:
      "A responsive multi-page website with modern layouts and smooth navigation.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h1 className="projects-title">Featured Projects</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-info">
              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={project.live}>Live Demo</a>
                <a href={project.github}>GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}