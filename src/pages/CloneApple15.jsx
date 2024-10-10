import React from "react";
import { iPhone15_screen, iPhone15_screen2 } from "../assets/images";

const CloneApple15 = () => {
  return (
    <>
      <section className="mt-16">
        <h1 className=" text-center bg-gray-800 py-5 text-gray-200">
          <span className="">Landing page iPhone 15 pro</span>
        </h1>
      </section>
      <div className="bg-black h-screen">
        <p className="text-gray-100 text-center p-8 text-8xl grid lg:grid-cols-2">
          <img src={iPhone15_screen} alt="screen-1" />
          <img src={iPhone15_screen2} alt="screen-2" />
        </p>
        <div className="mt-24 flex items-center gap-2 font-poppins justify-center">
          {/* Web link */}
          <div className="bg-gray-100 py-1 px-3 rounded-lg shadow">
            <a
              href="https://i-phone15-psi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-600 hover:underline"
            >
              Web link
            </a>
          </div>

          {/* GitHub link */}
          <div className="bg-gray-100 py-1 px-3 rounded-lg shadow">
            <a
              href="https://github.com/mdMehediBillah/iPhone15"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloneApple15;
