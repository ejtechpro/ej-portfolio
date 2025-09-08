import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React, Tailwind CSS, and Vite to showcase my skills, services, and projects.",
    image: "projects/dataAutomator.png",
    tech: ["React", "Tailwind", "Vite"],
    github: "https://github.com/username/portfolio",
    demo: "https://portfolio-demo.com",
  },
  {
    title: "E-Commerce App",
    description:
      "Full-stack e-commerce app with product listings, cart, and Stripe payment integration.",
    image: "/projects/communityFund.png",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/username/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
  {
    title: "AI Plant Disease Detector",
    description:
      "A machine learning web app to detect plant diseases from images using TensorFlow & FastAPI.",
    image: "/projects/plant-ai.png",
    tech: ["React", "FastAPI", "TensorFlow"],
    github: "https://github.com/username/plant-ai",
    demo: "https://plant-ai-demo.com",
  },
  {
    title: "Mobile Task Manager",
    description:
      "A mobile-first React Native app for managing tasks with offline storage.",
    image: "/projects/mobile-task.png",
    tech: ["React Native", "Expo", "SQLite"],
    github: "https://github.com/username/mobile-task",
    demo: "https://mobile-task-demo.com",
  },
];

const Projects = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <section className="px-6 md:px-12 lg:px-20 py-12 text-txt">
      <h2 className="relative text-2xl font-bold mb-10 inline-block">
        Projects
        <span className="block w-1/2 h-[2px] bg-secondary mt-1"></span>
        <span className="block w-1/3 h-[2px] bg-secondary mt-1"></span>
      </h2>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-border rounded-md overflow-hidden shadow-sm  bg-primary transition-all"
          >
            {/* Clickable Screenshot */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-[500px] cursor-pointer"
              onClick={() => setLightboxImage(project.image)}
            />

            {/* Details */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gray-500 text-white px-4 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-secondary hover:text-active"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-secondary hover:text-active"
                > 
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {/* Lightbox Modal */}
{lightboxImage && (
  <div className="fixed inset-0 bg-black/80 flex items-center select-none justify-center z-50 p-4">
    {/* Close button always at top-right */}
    <button
      onClick={() => setLightboxImage(null)}
      className="fixed top-6 right-6 text-white bg-gray-500 text-xl p-1 rounded-full hover:text-red-400 z-50 cursor-pointer shadow-md border-2 border-primary"
    >
      <FaTimes />
    </button>

    {/* Large Image - scrollable if tall */}
    <div className="max-w-6xl max-h-[90vh] overflow-auto">
      <img
        src={lightboxImage}
        alt="Project preview"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  </div>
)}

    </section>
  );
};

export default Projects;
