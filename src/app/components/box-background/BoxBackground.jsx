import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function BoxBg(props) {
  const texture = useLoader(TextureLoader, "meubg.jpg");
  return (
    <mesh {...props} recieveShadow={true} castShadow={true}>
      <boxBufferGeometry />
      <meshPhysicalMaterial map={texture} color={"white"} />
    </mesh>
  );
}
export default BoxBg;