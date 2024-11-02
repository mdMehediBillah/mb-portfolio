import { Canvas } from "@react-three/fiber";
import ComputerHome from "../components/ComputerHome";
import { Float, Html } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const HomeTwo = () => {
  const buttonRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      "#homeEnterBtn",
      {
        opacity: 0,
        y: -50,
        x: 10,
        scale: 0.75,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: 1,
        delay: 3,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      "#welcomeText",
      {
        opacity: 0,
        x: 50,
        y: 10,
        scale: 0.5,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 1,
        delay: 2,
        ease: "power4.out",
      }
    );
  }, []);

  // Function to handle navigation to the About page
  const goToAboutPage = () => {
    navigate("/about");
  };

  // Function to handle hover enter
  const handleMouseEnter = (e) => {
    gsap.to(e.target, {
      scale: 1.05,
      duration: 0.2,
      border: "4px solid #ff6363", // Change border color on hover
      ease: "power1.out",
    });
  };

  // Function to handle hover leave
  const handleMouseLeave = (e) => {
    gsap.to(e.target, {
      scale: 1,
      duration: 0.2,
      border: "2px solid transparent", // Reset border color on leave
      ease: "power1.out",
    });
  };

  // Function to handle button click
  const handleClick = () => {
    gsap.to("#homeEnterBtn", {
      scale: 0.95, // Scale down on click
      duration: 0.1,
      ease: "power1.out",
      onComplete: () => {
        console.log("Button Clicked!");
      },
    });
  };

  return (
    <>
      <div
        className="flex justify-center absolute left-1/2 top-[15%] transform -translate-x-1/2 z-30 opacity-0" // Set initial opacity to 0
        id="welcomeText"
      >
        <h1
          className=" font-semibold text-slate-100 px-2 text-center"
          onClick={goToAboutPage}
        >
          <span className="text-xl text-yellow-400 ">
            {" "}
            Hi! welcome to my portfolio.
          </span>
          <br /> I'm a fullstack Developer and a UI/UX Designer. Click "Enter"
          to know more about me.
        </h1>
      </div>
      <Canvas
        shadows
        camera={{ position: [0, 100, 800], fov: 65 }}
        className="z-20"
      >
        <color attach="background" args={["#05050f"]} />
        <fog attach="fog" args={["#101010", 880, 1250]} />
        <Suspense>
          <ComputerHome />
        </Suspense>
        <Float
          layoutId="homeEnterBtn"
          position={[0, -40, 0]} // Initial position
          ref={buttonRef}
        ></Float>
      </Canvas>
      <div
        className="flex justify-center absolute left-1/2 bottom-[20%] transform -translate-x-1/2 z-30 opacity-0" // Set initial opacity to 0
        id="homeEnterBtn"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <h1
          className="text-lg font-semibold text-slate-100 bg-blue-600 py-1 px-6 rounded-lg shadow-lg opacity-80 cursor-pointer hover:bg-rose-600 transition-all duration-200 ease-in-out transform hover:scale-105 bg-opacity-85"
          onClick={goToAboutPage}
        >
          Enter
        </h1>
      </div>
    </>
  );
};

export default HomeTwo;
