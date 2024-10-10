import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA, TextShpere } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import Educations from "../components/Educations";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Mehedi
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500 mb-4">
        <p>
          Fullstack web developer and UX/UI engineer based in Germany,
          specializing in technical education through hands-on learning and
          building web applications.
        </p>
      </div>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <span className=" bg-rose-100 py-2 px-3 rounded-lg shadow font-semibold text-gray-600 hover:underline hover:text-rose-500">
          Resume
        </span>
      </a>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <TextShpere />

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <Educations />

      <div className="mb-8 py-2">
        <p className="">Let’s explore my resume and some exciting projects!</p>

        <div className="flex items-center gap-2 mt-2">
          <Link
            to="/projects"
            className="bg-rose-100 py-2 px-3 rounded-lg shadow font-semibold text-gray-600 hover:underline hover:text-rose-500"
          >
            Projects
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

export default About;
