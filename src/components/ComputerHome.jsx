import {
  Html,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  Stage,
} from "@react-three/drei";

import Computer from "../../public/Computer";

const ComputerHome = () => {
  return (
    <>
      {" "}
      <Stage environment="city" intensity={0.6} castShadow>
        <PerspectiveCamera makeDefault position={[20, 10, 10]} />
        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          rotateSpeed={0.5}
          enablePan={false}
          enableZoom={false}
          maxAzimuthAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />

        <Computer />
      </Stage>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position-y={-58}
        scale={5}
        receiveShadow
      >
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={5}
          mixStrength={20}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.5}
        />
      </mesh>
      <Html className="absolute  py-5 px-10 bg-gray-100 rounded-lg shadow-lg bg-opacity-10 w-[380px]">
        <h1 className="text-gray-100 font-semibold text-3xl">
          Hey! This is Mehedi <br />
          to my Portfolio
        </h1>
      </Html>
    </>
  );
};

export default ComputerHome;
