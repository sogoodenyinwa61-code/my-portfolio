import { useState } from "react";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "Tech E-commerce Website",
      category: "React",
      description:
        "A modern gadget product page built with React, reusable components, and responsive CSS.",
      tools: "React • CSS • JavaScript",
      live: "https://tech-ecommerce-mauve.vercel.app/",
    },
    {
      title: "Laundry Booking Platform",
      category: "JavaScript",
      description:
        "A service platform concept that connects customers with laundry vendors and delivery options.",
      tools: "HTML • CSS • JavaScript",
      live: "https://your-laundry-link.vercel.app",
    },
    {
      title: "Cycle Tracker",
      category: "JavaScript",
      description:
        "A simple web calculator that uses JavaScript logic to predict cycle dates.",
      tools: "JavaScript • Forms • Logic",
      live: "https://your-cycle-tracker-link.vercel.app",
    },
    {
      title: "Login UI Design",
      category: "UI",
      description:
        "A clean login and signup interface with modern layout, form styling, and responsive design.",
      tools: "HTML • CSS • UI Design",
      live: "https://your-login-ui-link.vercel.app",
    },
    {
    title: "Restaurant Landing Page",
    category: "UI",
    description:
      "A stylish restaurant website layout with hero section, menu preview, and clean visual design.",
    tools: "HTML • CSS • JavaScript",
    live: "https://your-restaurant-link.vercel.app",
  
    },
  ];

  function filterProjects(category) {
    setActiveCategory(category);
  }

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(function (project) {
          return project.category === activeCategory;
        });

  return (
    <section className="projects section" id="projects">
      <div className="section-heading reveal">
        <p className="section-label">Selected Work</p>
        <h2>Projects that show my growth as a developer.</h2>
      </div>

      <div className="project-filters reveal">
        <button
          className={activeCategory === "All" ? "active-filter" : ""}
          onClick={function () {
            filterProjects("All");
          }}
        >
          All
        </button>

        <button
          className={activeCategory === "React" ? "active-filter" : ""}
          onClick={function () {
            filterProjects("React");
          }}
        >
          React
        </button>

        <button
          className={activeCategory === "JavaScript" ? "active-filter" : ""}
          onClick={function () {
            filterProjects("JavaScript");
          }}
        >
          JavaScript
        </button>

        <button
          className={activeCategory === "UI" ? "active-filter" : ""}
          onClick={function () {
            filterProjects("UI");
          }}
        >
          UI Design
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map(function (project, index) {
          return (
            <article className="project-card reveal" key={index}>
              <div className="project-top">
                <span>{project.category}</span>
                <small>{project.tools}</small>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Live Site →
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;