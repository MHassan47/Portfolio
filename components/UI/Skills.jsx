import React from "react";
import classes from "../../styles/skills.module.css";
import SkillsData from "../SkillsData";
import SkillItems from "./SkillItems";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

// const Background = (props) => {
//   const { gl } = useThree();

//   const texture = useTexture("/images/newback.jpg");
//   const formatted = new THREE.WebGLCubeRenderTarget(
//     texture.image.height
//   ).fromEquirectangularTexture(gl, texture);
//   return <primitive attach="background" object={formatted.texture} />;
// };

function Skills() {
  function createCoordinates() {
    let cubeCoordinate = [];
    const cubeCount = SkillsData.length;
    for (let i = 0; i < cubeCount; i++) {
      const t = (i / cubeCount) * 2 * Math.PI;
      const x = Math.cos(t) * 6;

      const z = Math.sin(t) * 6;
      cubeCoordinate[i] = [x, 1, z];
    }
    return cubeCoordinate;
  }

  const cubes = createCoordinates();

  return (
    <div className={`${classes.skills_container}`} id="skills">
      <Canvas
        gl={{ antialias: true }}
        camera={{ position: [0, 2, 10], fov: 70, near: 0.1, far: 1000 }}
        className={`${classes.canvas}`}
      >
        <color attach="background" args={["black"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 0]} intensity={1} />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, 200, 0]} intensity={0.5} />
        {cubes.map((coord, index) => (
          <SkillItems key={index} position={coord} logo={SkillsData[index]} />
        ))}
      </Canvas>
    </div>
  );
}

export default Skills;
