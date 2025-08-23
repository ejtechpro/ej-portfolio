import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-bg py-6 text-txt">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center space-y-4">
        {/* Social links */}
        <div className="flex space-x-6">
          <Link
           to="https://github.com/ejtechpro"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-active transition"
          >
            <FaGithub size={22} className="text-secondary" />
          </Link>
          <Link
           to="https://linkedin.com/in/ejtechpro"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-active transition"
          >
            <FaLinkedin size={22} className="text-secondary" />
          </Link>
          <Link
           to="https://twitter.com/ejtechpro"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-active transition"
          >
            <FaTwitter size={22} className="text-secondary" />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-text">
          © {new Date().getFullYear()}{" "}
          <span className="text-secondary">ejtechpro</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
