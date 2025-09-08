import React from 'react';
import SCHRIFT from '../assets/SCHRIFT.png';
import KLEIN from '../assets/KLEIN.png';

interface Project {
  title: string;
  description: string;
  link: string;
  img: string;
}

const projects: Project[] = [
  {
    title: "SCHRIFT",
    description: "Explore and apply custom Google fonts to your text.",
    link: "https://schrift.app.tostu.me/",
    img: SCHRIFT,
  },
  {
    title: "KLEIN",
    description: "Real-time Image Conversion & Network Performance Testing",
    link: "https://klein.app.tostu.me/",
    img: KLEIN,
  },
];

const Projects: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {projects.map((project) => (
        <div key={project.title} className="card bg-base-100 max-w-[500px] shadow-sm">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <figure className="h-32 overflow-hidden">
              <img
                src={project.img}
                alt="Project Screenshot"
                className="h-full w-full object-cover object-top"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;