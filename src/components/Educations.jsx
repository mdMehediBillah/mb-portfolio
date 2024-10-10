import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { educations } from "../constants";
import { arrow } from "../assets/icons";
import { VerticalTimeline } from "react-vertical-timeline-component";

const Educations = () => {
  return (
    <section className="max-container">
      <VerticalTimeline></VerticalTimeline>

      <h1 className="head-text">
        <span className="blue-gradient_text drop-shadow font-semibold">
          Educations
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        Education is the passport to the future, for tomorrow belongs to those
        who prepare for it today. Here are some of the educations I have
        completed.
      </p>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 my-20 gap-16">
        {educations.map((education, index) => (
          <div className="lg:w-[400px] w-full" key={education.index}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${education.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={education.iconUrl}
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
                className="mt-5 flex flex-col bg-white hover:shadow-lg transition-shadow duration-300 rounded-lg p-4"
              >
                <h4 className="text-2xl font-poppins font-semibold">
                  {education.degree}
                </h4>
                <p className="mt-2 text-slate-500">{education.uni}</p>
                <p className="mt-2 text-slate-500">{education.date}</p>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {education.points?.map((point, index) => (
                    <li
                      key={`education-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </Tilt>

              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={education.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />
    </section>
  );
};

export default Educations;
