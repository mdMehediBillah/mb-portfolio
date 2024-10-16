import { Canvas } from "@react-three/fiber";
import ComputerHome from "../components/ComputerHome";
import { Float, Html } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const HomeTwo = () => {
  const buttonRef = useRef();
  const htmlRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (buttonRef.current && htmlRef.current) {
      // Animate the button's position and scale
      gsap.fromTo(
        buttonRef.current.position,
        { y: -40 }, // Start position
        {
          y: -10, // End position
          scale: 1.1, // Scale up
          yoyo: true, // Reverse back to original
          repeat: -1, // Repeat infinitely
          duration: 0.5,
          ease: "power1.inOut",
        }
      );

      // Animate the opacity of the HTML content inside the Float
      gsap.fromTo(
        htmlRef.current,
        { opacity: 0 }, // Start from invisible
        {
          opacity: 1, // Fade in
          duration: 1,
          delay: 0.5, // Slight delay for smooth transition
          ease: "power4.out",
        }
      );
    }
  }, []);

  // Function to handle navigation to the About page
  const goToAboutPage = () => {
    navigate("/about");
  };

  return (
    <>
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
        >
          <Html ref={htmlRef}>
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              <h1
                className="text-lg font-semibold text-gray-800 bg-rose-300 py-1 px-6 rounded-lg shadow-lg opacity-80 cursor-pointer hover:bg-cyan-500 transition-all duration-200 ease-in-out transform hover:scale-105"
                onClick={goToAboutPage}
              >
                Enter
              </h1>
            </div>
          </Html>
        </Float>
      </Canvas>
    </>
  );
};

export default HomeTwo;
