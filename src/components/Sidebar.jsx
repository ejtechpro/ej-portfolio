import React from "react";
import { Link, NavLink } from "react-router-dom";
import profile from "../assets/icon.jfif";
import {
  FaHome,
  FaUser,
  FaTools,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope,
  FaArchive,
} from "react-icons/fa";
import useSidebar from "../store/useSidebar";
import { useShallow } from "zustand/shallow";

const Sidebar = () => {
  const [toggleSidebar] = useSidebar(useShallow((state) => [state.toggleSidebar]));

  const linkClass = ({ isActive }) =>
    `block px-3 py-2 transition-colors 
     border-b border-border
     ${isActive ? "text-active font-semibold group" : "text-secondary"} 
     hover:text-active`;

  // Close sidebar only on small screens
  const handleNavClick = () => {
    if (window.innerWidth < 1024) {
      toggleSidebar();
    }
  };

  return (
    <div className="w-[240px] min-w-[240px] bg-bg flex flex-col flex-1 text-txt">
      {/* Profile Section */}
      <div className="flex justify-center items-center pt-3.5">
        <div className="w-4/5">
          <div className="flex justify-center items-center">
            <div className="title font-bold">juma emmanuel</div>
          </div>

          {/* CV / Resume Links */}
          <ul className="flex border-t border-border justify-between mt-4">
            <li className="w-full text-center text-secondary border-r border-border">
              <Link
                to="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-secondary hover:text-active"
                onClick={handleNavClick}
              >
                CV
              </Link>
            </li>
            <li className="w-full text-center">
              <Link
                to="/resume.pdf"
                download
                className="block py-2 text-secondary hover:text-active"
                onClick={handleNavClick}
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-1 justify-center items-center mt-6">
        <nav className="flex flex-col space-y-2 px-6 w-4/5">
          <NavLink to="/" className={linkClass} onClick={handleNavClick}>
            <div className="flex items-center space-x-2">
              <FaHome className="text-secondary" />
              <span>Home</span>
            </div>
          </NavLink>

          <NavLink to="about" className={linkClass} onClick={handleNavClick}>
            <div className="flex items-center space-x-2">
              <FaUser className="text-secondary" />
              <span>About</span>
            </div>
          </NavLink>

          <NavLink to="skills" className={linkClass} onClick={handleNavClick}>
            <div className="flex items-center space-x-2">
              <FaTools className="text-secondary" />
              <span>Skills</span>
            </div>
          </NavLink>

          <NavLink to="services" className={linkClass} onClick={handleNavClick}>
            <div className="flex items-center space-x-2">
              <FaBriefcase className="text-secondary" />
              <span>Services</span>
            </div>
          </NavLink>

          <NavLink
            to="certifications"
            className={linkClass}
            onClick={handleNavClick}
          >
            <div className="flex items-center space-x-2">
              <FaArchive className="text-secondary" />
              <span>Archives</span>
            </div>
          </NavLink>

          <NavLink to="contact" className={linkClass} onClick={handleNavClick}>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-secondary" />
              <span>Contact</span>
            </div>
          </NavLink>

          <NavLink to="projects" className={linkClass} onClick={handleNavClick}>
            <div className="flex items-center space-x-2">
              <FaProjectDiagram className="text-secondary" />
              <span>Projects</span>
            </div>
          </NavLink>
        </nav>
      </div>
      <p className="text-xs text-center font-bold text-gray-500 py-2">
        Designed by: <span className="text-secondary">ejtechpro</span>
      </p>
    </div>
  );
};

export default Sidebar;
