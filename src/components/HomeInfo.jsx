import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center py-4 px-8 text-white mx-5 bg-rose-600 rounded-lg shadow-lg">
        Hi, I'm
        <span className="font-semibold mx-2 text-white">Mehedi Billah</span>
        👋
        <br />A Fullstack Web Developer from Germany
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="bg-rose-600 rounded-lg shadow-lg py-4 px-8 text-white rounded">
        <p className="font-medium sm:text-xl text-center ">
          Worked with many companies <br /> and picked up many skills along the
          way
        </p>

        <Link to="/about">
          <div className="bg-cyan-100 flex items-center gap-2 w-6/12 mx-auto py-1 justify-center rounded-full mt-4">
            <span className="font-semibold text-blue-500">Learn more</span>
            <img src={arrow} alt="arrow" className="w-4 h-4 object-contain " />
          </div>
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className=" bg-rose-600 py-4 px-8 rounded-lg shodow-lg text-white">
        <p className="font-medium sm:text-xl text-center">
          Successfully completed multiple projects over the years. <br />{" "}
          Curious about the projects?
        </p>

        <Link to="/projects" className="">
          <div className="flex gap-3 items-center bg-cyan-100 w-8/12 mx-auto rounded-full justify-center mt-4 py-1">
            <span className="text-blue-500 font-semibold">
              Visit my portfolio
            </span>
            <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />{" "}
          </div>
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className=" bg-rose-600 py-4 px-8 rounded-lg shodow-lg text-white">
        <p className="font-medium sm:text-xl text-center">
          Need a project done or looking for a dev? <br /> I'm just a few
          keystrokes away
        </p>

        <Link to="/contact" className="">
          <div className="flex gap-3 items-center bg-cyan-100 w-8/12 mx-auto rounded-full justify-center mt-4 py-1">
            <span className="text-blue-500 font-semibold">Let's talk</span>
            <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
          </div>
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
