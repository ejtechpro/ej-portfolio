import React from "react";
import { FaCode, FaMobileAlt, FaCloud, FaPaintBrush, FaDatabase, FaCogs, FaCodeBranch, FaPython } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-3xl text-secondary" />,
    title: "Web Development",
    description:
      "Building responsive, high-performance websites and web apps using modern frameworks like React and Node.js.",
  },
  {
    icon: <FaMobileAlt className="text-3xl text-secondary" />,
    title: "Mobile Development",
    description:
      "Creating smooth and user-friendly mobile experiences with React Native and cross-platform tools.",
  },
  {
    icon: <FaCloud className="text-3xl text-secondary" />,
    title: "Cloud & APIs",
    description:
      "Designing and deploying scalable APIs and cloud solutions with FastAPI, Django, or Firebase.",
  },
  {
    icon: <FaPaintBrush className="text-3xl text-secondary" />,
    title: "UI/UX Design",
    description:
      "Crafting clean, modern, and intuitive interfaces with attention to usability and accessibility.",
  },
  {
    icon: <FaDatabase className="text-3xl text-secondary" />,
    title: "Database Design",
    description:
      "Designing and optimizing database fo efficient data storage, retrieval, and management.",
  },
  {
    icon: <FaCogs className="text-3xl text-secondary" />,
    title: "System Intergration",
    description:
      "Intergrating and connecting various softwares components or systems to work together cohesively.",
  },
  {
    icon: <FaCodeBranch className="text-3xl text-secondary" />,
    title: "Fullstack Dev",
    description:
      "I build scalable and responsive high-performance applications.",
  },
  {
    icon: <FaPython className="text-3xl text-secondary" />,
    title: "Automation",
    description:
      "Designing automation using Python that simplifies boring repetive tasks.",
  },
];

const Services = () => {
  return (
    <section className="px-8 lg:px-16 py-12 text-txt">
      <h2 className="relative text-2xl font-bold mb-6 inline-block">
          Services
          <span className="block w-1/2 h-[2px] bg-secondary  mt-1"></span>
          <span className="block w-1/3 h-[2px] bg-secondary  mt-1"></span>
        </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border border-secondary rounded-xl shadow-sm hover:shadow-lg transition-transform hover:scale-[1.02]"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-[--color-text]">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
