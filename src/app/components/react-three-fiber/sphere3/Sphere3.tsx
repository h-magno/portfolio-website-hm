import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import THREE, { Mesh, TextureLoader, TubeGeometry } from 'three';

const createTubeWireframe = require("three-tube-wireframe");

function SphereTres(props: any) {
  const boxRef = useRef<Mesh>(null!);
  const texture = useLoader(TextureLoader, 'terra.jpg');







  // useFrame(() => {
  //   boxRef.current.rotation.y += 0.00315
  // });
  // ref={boxRef}
  return (
    <mesh {...props} recieveShadow={true} castShadow={true}>
      <sphereGeometry args={[0.25, 12, 12]} />

      <meshPhysicalMaterial
        wireframe
        // map={texture}
        color={'grey'}
      />
    </mesh>
  );
}
export default SphereTres;
