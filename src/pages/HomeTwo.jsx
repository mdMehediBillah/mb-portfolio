import { Canvas } from "@react-three/fiber";
import ComputerHome from "../components/ComputerHome";
import { Float, Html } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const HomeTwo = () => {
  const buttonRef = useRef();
  const htmlRef = useRef();
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    if (buttonRef.current && htmlRef.current) {
      // Animate the 3D position of the Float component (the buttonRef)
      gsap.fromTo(
        buttonRef.current.position,
        { x: 0, y: 40, z: 0 }, // Starting position
        {
          x: 0,
          y: -10, // Move up
          z: 0,
          yoyo: true,
          repeat: 1, // Bounce back
          duration: 1.5,
          ease: "power4.out",
        }
      );

      // Animate the opacity of the HTML content inside the Float
      gsap.fromTo(
        htmlRef.current, // Ref to the HTML div
        { opacity: 0 }, // Start from invisible
        {
          opacity: 1, // Fade in
          duration: 1.5,
          delay: 2, // Slight delay for smooth transition
          ease: "power4.out",
        }
      );
    }
  }, []);

  // Function to handle navigation to the About page
  const goToAboutPage = () => {
    navigate("/about"); // Use navigate function to go to /about
  };

  return (
    <>
      <Canvas shadows camera={{ position: [0, 200, 800] }}>
        <color attach="background" args={["#05050f"]} />
        <fog attach="fog" args={["#101010", 880, 1250]} />
        <Suspense>
          <ComputerHome />
        </Suspense>
        <Float
          layoutId="homeEnterBtn"
          position={[0, -40, 0]} // Initial position, animated by GSAP later
          ref={buttonRef}
        >
          <Html ref={htmlRef}>
            <div className="flex flex-col items-center justify-center h-full space-y-4 opacity-100">
              <h1
                className="text-xl font-semibold text-gray-800 bg-rose-500 py-2 px-6 rounded-lg shadow-lg opacity-80 cursor-pointer hover:bg-cyan-500"
                onClick={goToAboutPage} // Attach the click handler to navigate
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
