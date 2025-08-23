import React from "react";
import { FaCertificate } from "react-icons/fa";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    year: "2023",
    link: "https://www.coursera.org/professional-certificates/google-data-analytics",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2022",
    link: "https://www.freecodecamp.org/certification/",
  },
];

const Certifications = () => {
  return (
    <div className="px-8 lg:px-16 py-12 text-txt">
      <h2 className="relative text-2xl font-bold mb-6 inline-block">
        Archives
        <span className="block w-1/2 h-[2px] bg-secondary  mt-1"></span>
        <span className="block w-1/3 h-[2px] bg-secondary  mt-1"></span>
      </h2>

      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="p-4 rounded-xl border border-border shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">{cert.title}</h3>
            <p className="text-sm ">
              Issued by <span className="font-medium">{cert.issuer}</span> •{" "}
              {cert.year}
            </p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-secondary hover:underline"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
