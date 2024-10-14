import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three"; // For custom material settings

const Laptop = (props) => {
  const { nodes, materials } = useGLTF("/laptop.gltf");
  const textureLoader = new THREE.TextureLoader();
  const imageTexture = textureLoader.load("/textures/walpaper.jpg");

  // Custom materials for different parts
  const materialPart1 = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#3b084f"), // Red color for Part 1
    metalness: 1,
    roughness: 0.2,
  });

  // Keyboard material
  const materialPart2 = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#15153d"),
    metalness: 0.8,
    roughness: 0.1,
  });

  const materialPart3 = new THREE.MeshStandardMaterial({
    map: imageTexture, // Use the image as the texture
    metalness: 0.8,
    roughness: 2,
  });

  return (
    <group {...props} dispose={null}>
      <group scale={1}>
        <group
          position={[667.854, 40.894, 204.642]}
          rotation={[Math.PI, 0, 0]}
          scale={[9.059, 7.172, 9.059]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Material002_0.geometry}
            material={materialPart1} // Red material
          />
          <group
            position={[0.001, -1.421, 1.468]}
            rotation={[1.386, 0, 0]}
            scale={[11.038, 11.143, 13.86]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_Material004_0.geometry}
              material={materialPart1} // Red material
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_Material002_0.geometry}
              material={materialPart1} // Red material
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_Material003_0.geometry}
              material={materialPart3} // Red material
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Keyboard_Material001_0.geometry}
            material={materialPart2} // Keyboard material
            position={[0.024, -0.032, 0.48]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.976, 0.976, 0.978]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[-0.01, -0.047, -0.739]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[1.035, 0.972, 0.968]}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/laptop.gltf");

export default Laptop;
