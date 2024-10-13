import {
  CameraControls,
  Environment,
  Float,
  Html,
  MeshReflectorMaterial,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import Computer from "../../public/Computer";
import { Island } from "../models";
import { degToRad } from "three/src/math/MathUtils.js";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { Color } from "three";
// import { currentPageAtom } from "./UI";

const bloomColor = new Color("#fff");
bloomColor.multiplyScalar(1.5);
// ======================================
//  ComputerHome component

const ComputerHome = () => {
  const controls = useRef();
  const meshFitCameraHome = useRef();
  const textRef = useRef();
  // const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  useEffect(() => {
    // Check if textRef.current is available before running the animation
    if (textRef.current) {
      // Animate the x, y, and z properties of the position explicitly
      gsap.fromTo(
        textRef.current.position,
        { x: 20, y: 100, z: 0 }, // Starting values
        {
          x: -40, // Ending x position
          y: 0, // Ending y position
          z: 10, // Ending z position (optional)
          opacity: 1,
          duration: 1.5, // Duration of animation
          ease: "bounce.out", // Bounce ease effect
          onUpdate: () => {
            textRef.current.updateMatrix(); // Ensure the object updates its position in the scene
          },
        }
      );
    }
  }, []);

  const intro = async () => {
    controls.current.dolly(-420);
    controls.current.smoothTime = 1.6;
    fitCamera();
  };

  const fitCamera = async () => {
    controls.current.fitToBox(meshFitCameraHome.current, true);
  };

  useEffect(() => {
    intro();
  }, []);

  useEffect(() => {
    fitCamera();
    window.addEventListener("resize", fitCamera);
    return () => window.removeEventListener("resize", fitCamera);
  }, []);
  // currentPage

  return (
    <>
      <CameraControls
        ref={controls}
        minPolarAngle={Math.PI / 2.8}
        maxPolarAngle={Math.PI / 2.0}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        enableDamping={false}
        enableZoom={false}
        autoRotate={true}
        autoRotateSpeed={1.0}
      />
      <mesh position={[0, 80, 0]} ref={meshFitCameraHome} visible={false}>
        <boxGeometry args={[450, 100, 100]} />
        <meshBasicMaterial color="orange" transparent opacity={0.5} />
      </mesh>

      <Text
        font="fonts/Poppins-Black.ttf"
        position-x={-120}
        position-y={-0.5}
        position-z={-50}
        lineHeight={0.8}
        textAlign="center"
        fontSize={50}
        rotation-y={degToRad(25)}
        anchorY={"bottom"}
        ref={textRef}
      >
        WELCOME{"\n"}PORTFOLIO
        <meshBasicMaterial color={bloomColor}>
          <RenderTexture attach="map">
            <color attach="background" args={["lightgray"]} />
            <Float floatIntensity={4} rotationIntensity={5}>
              <Island
                scale={10}
                rotation-y={-degToRad(25)}
                rotation-x={degToRad(40)}
                position-y={-0.5}
              />
            </Float>
            <Environment preset="sunset" />
          </RenderTexture>
        </meshBasicMaterial>
      </Text>

      <group rotation-y={degToRad(-25)} position-x={150}>
        <Computer />
      </group>

      <Environment preset="sunset" />
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position-y={(0, 1)}
        scale={10}
        receiveShadow
      >
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={2}
          mixStrength={8}
          roughness={8}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.3}
        />
      </mesh>
    </>
  );
};

export default ComputerHome;
