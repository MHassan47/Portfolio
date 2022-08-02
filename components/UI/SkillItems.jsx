import { useFrame } from "@react-three/fiber";
import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

function SkillItems({ position, logo }) {
  const colorMap = useLoader(TextureLoader, logo);
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.008));
  return (
    <mesh
      ref={mesh}
      position={
        position
      } /*rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}*/
    >
      <boxBufferGeometry attach="geometry" args={[0.8, 0.8, 0.8]} />

      <meshLambertMaterial
        opacity={0.9}
        transparent={true}
        attach="material"
        map={colorMap}
      />
      <OrbitControls
        makeDefault
        rotateSpeed={0.08}
        enablePan={false}
        enableZoom={false}
        autoRotate={true}
        autoRotateSpeed={0.2}
      />
    </mesh>
  );
}

export default SkillItems;
