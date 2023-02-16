import { useRef } from 'react';

import { useFrame } from '@react-three/fiber';
import { Camera } from 'three';

export default function MyCameraRef() {
  const cameraRef = useRef<Camera>();

  useFrame(() => {
    if (cameraRef.current) {
      const position = cameraRef.current.position;
      console.log(
        `Posição da câmera: x=${position.x}, y=${position.y}, z=${position.z}`
      );
    }
  });

  return (
    <>
      
      {console.log(cameraRef)}
    </>
  );
}
