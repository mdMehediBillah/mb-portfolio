import React from "react";
import { iPhone15_screen, iPhone15_screen2 } from "../assets/images";
import iPhoneClone1 from "../../src/assets/projectPhotos/iPhoneClone/iPhoneClone1.png";
import iPhoneClone2 from "../../src/assets/projectPhotos/iPhoneClone/iPhoneClone2.png";
import iPhoneClone3 from "../../src/assets/projectPhotos/iPhoneClone/iPhoneClone3.png";
import iPhoneClone4 from "../../src/assets/projectPhotos/iPhoneClone/iPhoneClone4.png";
import iPhoneClone5 from "../../src/assets/projectPhotos/iPhoneClone/iPhoneClone5.png";
import iPhoneClone6 from "../../src/assets/projectPhotos/iPhoneClone/iPhoneClone6.png";
import iPhoneClone7 from "../../src/assets/projectPhotos/iPhoneClone/iPhoneClone7.png";
import { CTA } from "../components";

const CloneApple15 = () => {
  return (
    <>
      <section className="max-container">
        <h1 className="head-text">
          <span className="blue-gradient_text drop-shadow font-semibold">
            iPhone15 Pro
          </span>
        </h1>
        <div className="my-2">
          <img src={iPhoneClone1} alt="iPhoneClone1" />
        </div>
        <div className="grid md:grid-cols-2 mt-4 items-center gap-4">
          <h3 className="text-5xl p-4 bg-slate-600 rounded-lg font-semibold">
            Experience 3D Object Animation with a Clone of the iPhone 15 Pro
          </h3>
          <p className=" leading-relaxed">
            This project focuses on cloning the iPhone 15 Pro web page,
            leveraging React, Tailwind CSS, and GSAP for smooth, dynamic
            animations. The iPhone model, imported as a GLTF file, is rendered
            in 3D using Three.js to create an immersive web experience. The
            project is deployed on Vercel for seamless performance and
            accessibility.
          </p>
        </div>
        <div className="grid md:grid-cols-2 mt-24 gap-4">
          <div>
            <h3 className="text-2xl mb-4 font-semibold text-yellow-300">
              Key Features:
            </h3>
            <ul className="flex flex-col gap-2 marker:dot">
              <li>
                <strong className="pr-2">3D iPhone Model:</strong>
                The iPhone 15 Pro model is rendered in real-time using Three.js,
                providing an interactive and visually appealing 3D experience.
              </li>
              <li>
                <strong className="pr-2">Smooth Animations:</strong>
                GSAP (GreenSock Animation Platform) is used to implement smooth,
                dynamic animations, enhancing the user experience.
              </li>
              <li>
                <strong className="pr-2">Responsive Design:</strong>
                Tailwind CSS ensures a fully responsive design, making the page
                look great on all screen sizes.
              </li>
              <li>
                <strong className="pr-2">Engaging UI/UX:</strong>
                The combination of 3D graphics and fluid animations creates an
                immersive interface, closely mimicking the official iPhone 15
                Pro page.
              </li>
              <li>
                <strong className="pr-2">Modern Frontend:</strong>
                The page follows modern web development practices with a clean,
                maintainable structure and highly responsive behavior.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl mb-4 font-semibold text-yellow-300">
              Technology Stack:
            </h3>
            <ul className="flex flex-col gap-2 marker:dot">
              <li>
                <strong className="pr-2"> React:</strong>
                Used for building the dynamic, component-based front-end of the
                application.
              </li>
              <li>
                <strong className="pr-2">Tailwind CSS:</strong>
                Provides utility-first styling for fast, responsive, and
                visually consistent layouts.
              </li>
              <li>
                <strong className="pr-2">GSAP:</strong>
                Powers smooth, high-performance animations to enhance user
                interactions.
              </li>
              <li>
                <strong className="pr-2">Three.js:</strong>
                Enables rendering and controlling the 3D iPhone 15 Pro model in
                the browser.
              </li>
              <li>
                <strong className="pr-2">GLTF:</strong>
                The iPhone model is imported as a GLTF file, a format for
                efficient and lightweight 3D model transmission.
              </li>
              <li>
                <strong className="pr-2">Vercel:</strong>
                The application is deployed on Vercel, ensuring fast delivery,
                serverless functions, and automatic CI/CD for a smooth
                deployment workflow.
              </li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2 mt-24 gap-4">
          <div>
            <h3 className="text-2xl mb-4 font-semibold text-yellow-300">
              Project Process:
            </h3>
            <ul className="flex flex-col gap-2 marker:dot">
              <li>
                <strong className="pr-2">Planning and Design:</strong>
                The project started with wireframes and a UI design inspired by
                Apple's official iPhone 15 Pro page. The team identified the
                components to be developed and the animations to be implemented.
              </li>
              <li>
                <strong className="pr-2">3D Model Integration:</strong>
                The iPhone 15 Pro model was created or sourced in GLTF format,
                and Three.js was used to integrate it into the React project,
                allowing for rendering and interaction.
              </li>
            </ul>
          </div>
          <div>
            <div>
              <img src={iPhoneClone3} alt="iPhoneClone2" />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 mt-12 gap-4">
          <div className="">
            <div className="h-full w-full object-cover">
              <img
                src={iPhoneClone2}
                alt="iPhoneClone2"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <ul className="flex flex-col gap-2 marker:dot">
              <li>
                <strong className="pr-2">Animations:</strong>
                GSAP was used to create smooth scroll-triggered animations and
                other interactions, enhancing the user experience by making the
                3D model and page elements come alive.
              </li>
              <li>
                <strong className="pr-2">Testing and Optimization:</strong>
                The application was tested for performance and responsiveness
                across various devices, ensuring a consistent experience.
                Vercel's platform was leveraged for CI/CD to deploy the project
                efficiently.
              </li>
              <li>
                <strong className="pr-2">Deployment:</strong>
                The final project was deployed to Vercel, allowing for easy
                scalability, fast performance, and automated updates when new
                changes are pushed.
              </li>
            </ul>
          </div>
        </div>
        <h3 className="text-2xl mb-4 font-semibold text-yellow-300 mt-24">
          3D Experience
        </h3>
        <div className="grid md:grid-cols-3  gap-4 mb-8">
          <div>
            <img
              src={iPhoneClone6}
              alt="pokeFightPhoto3"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src={iPhoneClone4}
              alt="pokeFightPhoto4"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src={iPhoneClone5}
              alt="pokeFightPhoto5"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <img
            src={iPhoneClone7}
            alt="pokeFightPhoto3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center mt-12  pb-24 ">
          <div className="flex gap-2">
            <button className="py-2 px-6 cursor-pointer bg-rose-500 rounded-lg text-slate-100 font-semibold">
              <a
                href="https://i-phone15-psi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Now
              </a>
            </button>
            <button className="py-2 px-6 cursor-pointer bg-slate-600 rounded-lg text-slate-100 font-semibold">
              <a
                href="https://github.com/mdMehediBillah/iPhone15"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </button>
          </div>
        </div>

        <CTA />
      </section>
    </>
  );
};

export default CloneApple15;
