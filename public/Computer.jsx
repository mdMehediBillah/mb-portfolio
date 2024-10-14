import React, { useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

const Computer = (props) => {
  const { nodes, materials } = useGLTF("/computer.gltf");
  const woodTexture = useLoader(THREE.TextureLoader, "/textures/wood.jpg");
  // Create a wooden material
  const woodenMaterial = new THREE.MeshStandardMaterial({
    map: woodTexture, // The diffuse texture
    roughness: 0.8, // Adjust as needed
    metalness: 0.8, // Set to 0 for a non-metallic look
  });
  return (
    <group {...props} dispose={null}>
      {/* cable white*/}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyboardCable_ComputerDesk_0.geometry}
        material={materials.ComputerDesk}
        position={[34.329, 76.164, 56.062]}
      />
      {/* paper */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Paper2_ComputerDesk_0.geometry}
        position={[76.15, 75.001, 39.723]}
        rotation={[0, 0.031, 0]}
        scale={0.1}
      >
        <meshStandardMaterial
          attach="material"
          color="#69d4d6" // White color typical for paper
          roughness={0.4} // A bit rough to mimic the texture of paper
          metalness={0} // Non-metallic
          opacity={0.95} // Slight transparency to represent paper
          transparent={true} // Enables transparency
        />
      </mesh>

      {/* Cable black */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Monitor_cable_ComputerDesk_0.geometry}
        position={[-3.9, 74.815, 28.04]}
      >
        <meshStandardMaterial
          attach="material"
          color="orange" // Black is typical for most cables
          roughness={0.8} // High roughness to create a matte, rubber-like finish
          metalness={0.0} // No metalness to keep it non-metallic
        />
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Speakers_cable_ComputerDesk_0.geometry}
        material={materials.ComputerDesk}
        position={[27.417, 74.815, 27.427]}
      />
      {/* Mouse cable */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mouse_cord_ComputerDesk_0.geometry}
        position={[34.329, 76.164, 56.062]}
      >
        <meshStandardMaterial
          attach="material"
          color="black" // Dark color for the cord
          roughness={0.9} // High roughness for a matte rubber/plastic look
          metalness={0.05} // Low metalness for non-metallic appearance
        />
      </mesh>

      {/* CD top ot the table */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CD_ComputerDesk_0.geometry}
        position={[-76.997, 75.076, 57.333]}
        rotation={[-Math.PI, 1.261, -Math.PI]}
        scale={0.1}
      >
        <meshStandardMaterial
          attach="material"
          color="silver" // CDs have a silver-like reflective surface
          roughness={0.1} // Low roughness to make it glossy and smooth
          metalness={1.0} // High metalness to enhance the reflective quality
        />
      </mesh>

      {/* side drawer */}
      {/* Side drawer with wooden texture */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drawers_ComputerDesk_0.geometry}
        material={woodenMaterial} // Use the wooden material here
        position={[65.098, 0, 55.308]}
      />

      {/* Phone body */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Phone_stand_ComputerDesk_0.geometry}
        position={[50.705, 74.815, 18.869]}
        rotation={[0, -0.193, 0]}
      >
        <meshStandardMaterial
          attach="material"
          color="black" // Phone body color
          roughness={0.2} // A more matte look
          metalness={0.1} // Low metalness for plastic look
        />
      </mesh>

      {/* Phone receiver */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Phonehandle_ComputerDesk_0.geometry}
        position={[46.949, 79.24, 18.508]}
        rotation={[0.167, -0.19, 0.032]}
        scale={0.263}
      >
        <meshStandardMaterial
          attach="material"
          color="orange" // Receiver in black
          roughness={0.2} // Slightly smoother for a plastic feel
          metalness={0.15} // Low metalness
        />
      </mesh>

      {/* Phone body */}

      {/* CD case */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CD_case_ComputerDesk_0.geometry}
        position={[-76.997, 75.356, 57.333]}
        rotation={[-Math.PI, 1.261, -Math.PI]}
        scale={0.064}
      >
        <meshStandardMaterial
          attach="material"
          color="black" // A light gray color to represent the case material
          roughness={0.4} // Moderate roughness for a plastic look
          metalness={0.1} // Slightly metallic to mimic plastic sheen
        />
      </mesh>

      {/* Pen */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pen_ComputerDesk_0.geometry}
        material={materials.ComputerDesk}
        position={[76.512, 76.014, 45.557]}
        rotation={[0, 0.244, 0]}
        scale={0.005}
      />
      {/* Paper */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Paper_ComputerDesk_0.geometry}
        material={materials.ComputerDesk}
        position={[74.855, 74.63, 39.723]}
        rotation={[0, 0.12, 0]}
        scale={0.1}
      />
      {/* Floppy */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floppy_disk_FloppyDisk_0.geometry}
        material={materials.FloppyDisk}
        position={[-41.906, 74.815, 65.87]}
        rotation={[Math.PI / 2, 0, 0.247]}
      />
      {/* Keyboard */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Keyboard_ComputerDesk_0.geometry}
        position={[-3.76, 74.815, 55.898]}
        scale={0.305}
      >
        <meshStandardMaterial
          attach="material"
          color="black" // Sets the keyboard color to black
          roughness={0.4} // Gives the keyboard a slightly rough surface
          metalness={0.2} // Low metalness for a plastic feel
        />
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SpeakerR_ComputerDesk_0.geometry}
        material={materials.ComputerDesk}
        position={[-33.15, 74.815, 31.868]}
        rotation={[0, 0.446, 0]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SpeakerL_ComputerDesk_0.geometry}
        material={materials.ComputerDesk}
        position={[27.417, 74.815, 27.427]}
        rotation={[0, -0.102, 0]}
        scale={0.18}
      />
      {/* Mouse pad */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mousepad_ComputerDesk_0.geometry}
        position={[42.964, 74.815, 54.261]}
        rotation={[0, -0.115, 0]}
        scale={0.149}
      >
        <meshStandardMaterial
          attach="material"
          color="#4b4b4b" // A dark color that is typical for mousepads
          roughness={0.7} // Higher roughness to give it a matte finish
          metalness={0.0} // No metallic property for a typical mousepad
        />
      </mesh>

      {/* Mouse */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mouse_ComputerDesk_0.geometry}
        position={[34.329, 76.164, 56.062]}
        scale={0.271}
      >
        <meshStandardMaterial
          attach="material"
          color="#a3177b" // Dark gray color for the mouse body
          roughness={0.2} // Medium roughness for a semi-glossy finish
          metalness={0.1} // Low metalness for a plastic feel
        />
      </mesh>

      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mouse_ComputerDesk_0.geometry}
        material={materials.ComputerDesk}
        position={[34.329, 76.164, 56.062]}
        scale={0.271}
      /> */}
      {/* CPU */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Computer_case_ComputerDesk_0.geometry}
        position={[-55.078, 74.815, 31.19]}
        rotation={[0, 0.036, 0]}
        scale={0.229}
      >
        <meshStandardMaterial
          attach="material"
          color="#750d43" // Set the CPU color to gray
          roughness={0.1} // Slightly rough for a matte finish
          metalness={0.5} // High metalness for a metallic surface
        />
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_desk_ComputerDesk_0.geometry}
        scale={0.271}
      >
        <meshStandardMaterial
          attach="material"
          color="black" // Set the color of the material
          roughness={0.3} // Set roughness (0 = shiny, 1 = rough)
          metalness={0.1} // Set metalness (0 = non-metal, 1 = metallic)
        />
      </mesh>
      {/* Table top */}

      {/* Chair */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube000_ComputerDesk_0.geometry}
        position={[10.874, 0, 115.729]}
        rotation={[0, 0.58, 0]}
        scale={0.394}
      >
        <meshStandardMaterial
          attach="material"
          color="orange" // Set the color for the chair
          roughness={0.8} // Customize roughness
          metalness={0.3} // Customize metalness
        />
      </mesh>
      {/* Chair

      {/* Computer Monitor */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Computer_monitor001_ComputerDesk_0.geometry}
        position={[-3.9, 74.815, 28.04]}
        scale={[0.192, 0.144, 0.096]}
      >
        <meshStandardMaterial
          attach="material"
          color="#142038" // Set the monitor color to black
          roughness={0.2} // Slightly rough for a matte finish
          metalness={0.1} // Add a bit of metallic feel for the frame
        />
      </mesh>
      <mesh position={[-3.9, 98, 38]} rotation-x={-0.15}>
        <boxGeometry args={[30, 24, 4]} />
        <meshStandardMaterial
          attach="material"
          color="#142038" // Set the monitor color to black
          roughness={0.2} // Slightly rough for a matte finish
          metalness={0.1} // Add a bit of metallic feel for the frame
        />
      </mesh>

      {/* Monitor */}
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Computer_monitor001_ComputerDesk_0.geometry}
        material={materials.ComputerDesk}
        position={[-3.9, 74.815, 28.04]}
        scale={[0.192, 0.144, 0.096]}
      /> */}
    </group>
  );
};

useGLTF.preload("/computer.gltf");
export default Computer;
