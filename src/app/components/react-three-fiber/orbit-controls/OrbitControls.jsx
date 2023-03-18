import React from 'react';
import { extend, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Box } from '@mui/system';

extend({ OrbitControls });

function Controls(props) {
  const { camera, gl } = useThree();

  return (
    <>
      {/* {console.log(camera.position)} */}
      <orbitControls attach="orbitControls" args={[camera, gl.domElement]} />
    </>
  );
}

export default Controls;
