import React, { useRef } from 'react';import { useFrame, useLoader } from '@react-three/fiber';
import { Mesh, TextureLoader } from 'three';

function Sphere2(props: any) {
  const boxRef = useRef<Mesh>(null!);
  const texture = useLoader(TextureLoader, 'terra.jpg');

  useFrame(() => {
    boxRef.current.rotation.y -= 0.00315
  });

  return (
    <mesh {...props} recieveShadow={true} castShadow={true} ref={boxRef}>
      <sphereGeometry args={document.documentElement.clientWidth <= 912
                  ? [0.1,12,12]
                  : [0.2,12,12] } />
      <meshPhysicalMaterial
      wireframe
        // map={texture}
        color={'darkblue'}
      />
    </mesh>
  );
}
export default Sphere2;
