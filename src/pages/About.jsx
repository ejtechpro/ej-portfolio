import IMG from "../assets/3.jpg";

const About = () => {
  return (
    <section className="px-8 lg:px-16 py-12 text-txt">
      {/* Intro */}
      <h2 className="relative text-txt text-2xl font-bold mb-6 inline-block">
        About me
        <span className="block w-1/2 h-[2px] bg-secondary  mt-1"></span>
        <span className="block w-1/3 h-[2px] bg-secondary  mt-1"></span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left: Text */}
        <div className="lg:w-2/3 space-y-5 text-txt">
          <p className=" leading-relaxed">
            Hi! My name is{" "}
            <span className="font-semibold text-secondary">Juma Emmanuel</span>.
            I’m a passionate{" "}
            <span className="text-gray-500 font-bold">Software Engineer </span>
            with a strong focus on building scalable and user-friendly
            Softwares.
          </p>

          <p className="leading-relaxed">
            I enjoy solving real-world problems with technology, combining clean
            code, modern frameworks, and thoughtful design. Over time, I’ve
            worked on projects ranging from personal portfolios to data-driven
            apps and backend services.
          </p>

          <p className="text-gray-500 leading-relaxed">
            Outside coding, I’m curious about{" "}
            <span className="font-medium">emerging technologies</span>, enjoy
            learning new tools, and love contributing to projects that inspire
            growth and creativity.
          </p>

          {/* Quick Facts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="p-4 border border-secondary rounded-lg shadow-sm text-center">
              <h4 className="text-xl font-bold text-secondary">2+</h4>
              <p className="text-sm ">Years Experience</p>
            </div>
            <div className="p-4 border border-secondary rounded-lg shadow-sm text-center">
              <h4 className="text-xl font-bold text-secondary">20+</h4>
              <p className="text-sm ">Completed Projects</p>
            </div>
            <div className="p-4 border border-secondary rounded-lg shadow-sm text-center">
              <h4 className="text-xl font-bold text-secondary">12+</h4>
              <p className="text-sm ">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Right: Image or Illustration */}
        <div className="lg:w-1/3 flex justify-center">
          <div className="rounded-md overflow-hidden bg-secondary shadow-md transition-transform hover:scale-[1.02]">
            <img
              src={IMG}
              alt="About Juma Emmanuel"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="relative text-xl font-bold mb-3 inline-block">
          Why me
          <span className="block w-full h-[2px] bg-secondary mt-1"></span>
        </h2>
        <p className="leading-relaxed">
          Results-driven and highly skilled software developer with over 2.5
          years of experience building and maintaining softwares. Proficient in
          various front-end and back-end technologies, with a strong focus on
          creating user-friendly and responsive designs. Proven ability to work
          collaboratively with cross-functional teams, and a commitment to
          staying current with the latest industry developments and trends.
        </p>
      </div>
    </section>
  );
};

export default About;
