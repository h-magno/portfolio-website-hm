import { useLoader } from '@react-three/fiber';
import React from 'react';
import { TextureLoader } from 'three';

function Floor(props) {

  // const texture = useLoader(TextureLoader, 'meubg.jpg')

  return (
    <mesh {...props} recieveShadow={true}>
      <boxBufferGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial color="white" />
    </mesh>
  );
}

export default Floor;
