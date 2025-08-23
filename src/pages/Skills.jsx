import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { MdOutlineCheck, MdOutlineChecklist } from "react-icons/md";

const skills = [
  {
    category: "Frontend",
    description:
      "Building responsive, user-friendly interfaces with modern frameworks.",
    items: [
      { name: "React", level: 4 },
      { name: "JavaScript (ES6+)", level: 4 },
      { name: "Tailwind CSS", level: 3 },
      { name: "HTML & CSS", level: 5 },
    ],
    extra: ["Zustand", "React Native", "Bootstrap"],
  },
  {
    category: "Backend",
    description:
      "Developing scalable APIs and handling server-side logic efficiently.",
    items: [
      { name: "Node.js", level: 4 },
      { name: "Express.js", level: 3 },
      { name: "Python", level: 3 },
      { name: "SQL / NoSQL", level: 3 },
    ],
    extra: ["Postman", "REST APIs", "Redis", "MongoDB",  "PostgreSQL", "MySQL"],
  },
  {
    category: "Tools & DevOps",
    description:
      "Version control, collaboration tools, and deployment workflows.",
    items: [
      { name: "Git & GitHub", level: 4 },
      { name: "Docker", level: 3 },
      { name: "CI/CD Basics", level: 4 },
    ],
    extra: ["Linux", "VS Code", "Figma"],
  },
];

const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Clear Communication",
  "Continuous Learning",
];

const learning = ["GraphQL", "Kubernetes", "TypeScript"];

const renderStars = (level) => {
  const total = 5;
  return (
    <div className="flex">
      {[...Array(total)].map((_, i) =>
        i < level ? (
          <FaStar key={i} className="text-yellow-500" />
        ) : (
          <FaRegStar key={i} className="text-gray-400" />
        )
      )}
    </div>
  );
};

const Skills = () => {
  return (
    <section className="px-8 py-12 lg:px-16 space-y-10 text-txt">
      <h2 className="relative text-2xl font-bold mb-6 inline-block">
        Skills
        <span className="block w-1/2 h-[2px] bg-secondary  mt-1"></span>
        <span className="block w-1/3 h-[2px] bg-secondary  mt-1"></span>
      </h2>

      {/* Tech Skills */}
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skillGroup, index) => (
          <div
            key={index}
            className="bg-primary p-5 rounded-xl shadow-md border border-border"
          >
            <h3 className="text-lg font-semibold mb-2">
              {skillGroup.category}
            </h3>
            <p className=" mb-4">{skillGroup.description}</p>

            <ul className="space-y-3">
              {skillGroup.items.map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between  items-center border-b border-border pb-1"
                >
                  <span className="">{item.name}</span>
                  {renderStars(item.level)}
                </li>
              ))}
            </ul>

            {/* Extra Tools */}
            <div className="flex flex-wrap gap-2 mt-4">
              {skillGroup.extra.map((tool, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[--color-hover] text-sm rounded-full "
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Soft Skills</h3>
        <ul className="grid md:grid-cols-2 gap-2">
          {softSkills.map((skill, i) => (
            <li
              key={i}
              className="px-4 flex mb-2 items-center gap-1 py-2 bg-bg rounded-xl shadow-sm border border-border"
            >
              <MdOutlineCheck className="text-xl text-green-600" /> {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Currently Learning */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Currently Learning</h3>
        <div className="flex flex-wrap gap-2">
          {learning.map((item, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-[--color-hover] text-sm rounded-lg "
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
