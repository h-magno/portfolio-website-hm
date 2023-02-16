import React, { useRef } from 'react';import { useFrame, useLoader } from '@react-three/fiber';
import { Mesh, TextureLoader } from 'three';

function Sphere(props: any) {
  const boxRef = useRef<Mesh>(null!);
  const texture = useLoader(TextureLoader, 'uv.png');

  useFrame(() => {
    boxRef.current.rotation.x += 0.01
    // boxRef.current.rotation.y += 0.00115
    // boxRef.current.rotation.z += 0.005
  });

  return (
    <mesh {...props} recieveShadow={true} castShadow={true} ref={boxRef}>
      <sphereGeometry args={[0.1, 20, 20]} />
      <meshPhysicalMaterial
        wireframeLinewidth={4}
        map={texture}
        color={'white'}
      />
    </mesh>
  );
}
export default Sphere;
