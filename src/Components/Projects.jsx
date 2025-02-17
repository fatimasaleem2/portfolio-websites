import React from "react";
import Project1 from "../assets/project-1.png";
import Project2 from "../assets/project-2.png";
import Project3 from "../assets/project-3.png";

const projects = [
  {
    image: Project1,
    title: "Tech Transit",
    link: "https://drive.google.com/file/d/1YxyunGoBSsE_kIVi0bfe_Bv1p-S80bv7/view?usp=drive_link",
  },
  {
    image: Project2,
    title: "Edgard",
    link: "https://edgard.io/",
  },
  {
    image: Project3,
    title: "Arresa",
    link: "https://play.google.com/store/apps/details?id=com.cabmeltd.user&hl=en",
  },
];

const Projects = () => {
  return (
    <section id="projects" style={{paddingTop : 60}}>
      <div className="main_title">
        <span>Projects</span>
        <h3>What I Do for My Clients</h3>
      </div>
      <div className="experience-education-container">
        <div className="gallery">
          {projects.map((project, index) => (
            <div key={index} className="image-card">
              <img src={project.image} alt={project.title} className="image" />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="overlay">
                  <p className="title">{project.title}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
