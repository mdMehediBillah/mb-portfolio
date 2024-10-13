import { Canvas } from "@react-three/fiber";
import ComputerHome from "../components/ComputerHome";
import { Float, Html } from "@react-three/drei";
import { Suspense } from "react";

const HomeTwo = () => {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 200, 800] }}>
        <color attach="background" args={["#05050f"]} />
        <fog attach="fog" args={["#101010", 880, 1250]} />
        <Suspense>
          <ComputerHome />
        </Suspense>
        <Float layoutId="homeBtn" position={[0, -40, 0]}>
          <Html>
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              <h1 className="text-xl font-semibold text-gray-800  bg-rose-500 py-2 px-6 rounded-lg shadow-lg opacity-80 cursor-pointer hover:bg-cyan-500">
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
