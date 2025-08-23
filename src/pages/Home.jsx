import { Link } from "react-router-dom";
import profile from "../assets/1.jpg";
import ResumeViewer from "../components/Resume";

const Home = () => {
  return (
    <>
      <ResumeViewer />
      <section className="py-12 min-h-[80vh] px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="relative text-txt text-2xl font-bold mb-6 inline-block">
              Welcome
              <span className="block w-1/2 h-[2px] bg-secondary  mt-1"></span>
              <span className="block w-1/3 h-[2px] bg-secondary  mt-1"></span>
            </h2>

            <h2 className="text-2xl text-txt">
              I&apos;m a{" "}
              <span className="text-secondary">Software Engineer</span>
            </h2>

            <p className="text-txt text-base leading-relaxed max-w-lg">
              I build modern, user-friendly softwares with a focus on
              performance, accessibility, and clean design. With experience in
              frontend and backend development, I enjoy creating products that
              make a positive impact.
            </p>
            <p className="text-txt text-base leading-relaxed max-w-lg">
              Results-oriented and detail-oriented Junior software engineer with
              extensive experience in full-stack development.Proficient in
              programming, with a strong foundation in web technologies,
              database management, and Angile methodologies. A collaborative
              team player with a passion for delivering high-quality software
              solutions.
            </p>

            {/* Call-to-actions */}
            <div className="flex space-x-4 justify-center items-center">
              <Link
                to="/projects"
                className="px-5 whitespace-nowrap py-1.5 rounded-full border-2 border-secondary bg-secondary text-white hover:opacity-90 transition"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="px-5  whitespace-nowrap  py-1.5 rounded-full border-2 border-secondary text-secondary 
                       hover:bg-secondary-heavy transition"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
            <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-black shadow-md transition-transform hover:scale-[1.02]">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="call"></div>
      </section>
    </>
  );
};

export default Home;
