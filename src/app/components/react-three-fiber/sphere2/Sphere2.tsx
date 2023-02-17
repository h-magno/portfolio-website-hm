import React, { useRef } from 'react';import { useFrame, useLoader } from '@react-three/fiber';
import { Mesh, TextureLoader } from 'three';

function Sphere2(props: any) {
  const boxRef = useRef<Mesh>(null!);
  const texture = useLoader(TextureLoader, 'terra.jpg');

  useFrame(() => {
    boxRef.current.rotation.y += 0.00315
  });

  return (
    <mesh {...props} recieveShadow={true} castShadow={true} ref={boxRef}>
      <sphereGeometry args={[0.25, 12,12]} />
      <meshPhysicalMaterial
        wireframe
        // map={texture}
        color={'grey'}
      />
    </mesh>
  );
}
export default Sphere2;
