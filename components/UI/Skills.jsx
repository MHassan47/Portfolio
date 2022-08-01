import React from "react";
import classes from "../../styles/skills.module.css";
import SkillItems from "./SkillItems";
import { Canvas } from "@react-three/fiber";

function Skills() {
  function createCoordinates() {
    let cubeCoordinate = [];
    const cubeCount = 15;
    for (let i = 0; i < cubeCount; i++) {
      // let y = 0;
      // let x = 0;
      // y++;
      // x++;
      const t = (i / cubeCount) * 2 * Math.PI;
      const x = Math.cos(t) * 6;
      // const y = Math.floor(Math.random() * 10) - 3;
      // const y = Math.tan(t) * 4;
      const z = Math.sin(t) * 6;
      cubeCoordinate[i] = [x, 1, z];
      // console.log(y, x);
    }
    return cubeCoordinate;
  }

  // function createCoordinates() {
  //   let cubeCoordinate = [];
  //   for (let i = 0; i < 15; i++) {
  //     var phi = Math.acos(-1 + (2 * i) / 15);
  //     var theta = Math.sqrt(15 * Math.PI) * phi;
  //     const x = 800 * Math.cos(theta) * Math.sin(phi);
  //     const y = 800 * Math.sin(theta) * Math.sin(phi);
  //     const z = 800 * Math.cos(phi);
  //     cubeCoordinate[i] = [x, y, z];
  //   }
  //   return cubeCoordinate;
  // }
  const cubes = createCoordinates();
  // console.log(cubes);
  return (
    <div className={`${classes.skills_container}`}>
      <Canvas
        camera={{ position: [0, 2, 10], fov: 70, near: 0.1, far: 1000 }}
        // resize={{ scroll: false }}
        className={`${classes.canvas} width-900px`}
      >
        <color attach="background" args={["grey"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 0]} intensity={2} />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, 10, 10]} intensity={0.5} />
        {cubes.map((coord, index) => (
          <SkillItems key={index} position={coord} />
        ))}
      </Canvas>
    </div>
  );
}

export default Skills;
