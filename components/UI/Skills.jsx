import React from "react";
import classes from "../../styles/skills.module.css";
import SkillsData from "../SkillsData";
import SkillItems from "./SkillItems";
import { Canvas } from "@react-three/fiber";

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
    <div className={`${classes.skills_container}`}>
      <Canvas
        camera={{ position: [0, 2, 10], fov: 70, near: 0.1, far: 1000 }}
        className={`${classes.canvas}`}
      >
        <color attach="background" args={["white"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 0]} intensity={2} />
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
