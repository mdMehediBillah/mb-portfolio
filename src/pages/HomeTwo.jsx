import { Canvas } from "@react-three/fiber";
import ComputerHome from "../components/ComputerHome";
import { Html } from "@react-three/drei";

const HomeTwo = () => {
  return (
    <>
      <Canvas className="h-screen w-full ">
        <color attach="background" args={["#101010"]} />
        <fog attach="fog" args={["#101010", 550, 550]} />
        <ComputerHome />
      </Canvas>
    </>
  );
};

export default HomeTwo;
