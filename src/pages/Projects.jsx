import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "/src/utils/motion";
import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-300 mt-2 leading-relaxed">
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>
      {/* ${project.theme} */}
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project, index) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl `} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
              <Tilt
                options={{
                  max: 45,
                  scale: 1.05,
                  speed: 500,
                  perspective: 1000,
                }} // Added perspective for 3D effect
                className="mt-5 flex flex-col bg-gray-300 hover:shadow-lg transition-shadow duration-300 rounded-lg py-4 px-6"
              >
                <h4 className="text-2xl font-poppins font-semibold text-blue-600">
                  {project.name}
                </h4>
                <p className="mt-2 text-slate-800">{project.description}</p>
                <p className="mt-2 text-slate-800">{project.more}</p>
              </Tilt>

              <div className="mt-2 flex items-center gap-1 font-poppins justify-between">
                <div className="bg-rose-500 py-1 px-3 rounded-md shadow w-full text-center">
                  <Link
                    to={`/${project.id}`}
                    rel="noopener noreferrer"
                    className="font-semibold text-slate-100 hover:underline"
                  >
                    Details
                  </Link>
                </div>

                <div className="bg-slate-600 py-1 px-3 rounded-md shadow w-full text-center">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-slate-100 hover:underline"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200 pt-8" />

      <div className="mb-8 py-2">
        <p className="">Let’s explore about me and my resume!</p>

        <div className="flex items-center gap-2 mt-2">
          <Link
            to="/about"
            className="bg-rose-100 py-2 px-3 rounded-lg shadow font-semibold text-gray-600 hover:underline hover:text-rose-500"
          >
            About me
          </Link>
          <div className="bg-rose-100 py-2 px-3 rounded-lg shadow font-semibold text-gray-600 hover:underline hover:text-rose-500">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
