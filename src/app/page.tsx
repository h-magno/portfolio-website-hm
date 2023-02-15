'use client';
import Image from 'next/image';
import { useEffect, Suspense } from 'react';

import ReactDOM from 'react-dom';
import { Canvas, createRoot, extend } from '@react-three/fiber';
import Floor from './components/react-three-fiber/floor/Floor';
import Sphere from './components/react-three-fiber/sphere/Sphere';
import Sphere2 from './components/react-three-fiber/sphere2/Sphere2';
import LightBulb from './components/react-three-fiber/light-bulb/LightBulb';
import OrbitControls from './components/react-three-fiber/orbit-controls/OrbitControls';
import Draggable from '../app/components/react-three-fiber/draggable/Draggable';
import * as THREE from 'three';
import Navbar from './components/navbar/Navbar';
import { Reflector } from '@react-three/drei';

extend(THREE);

export default function Home() {
  return (
    <>
      <Navbar></Navbar>

      <div style={{ height: '100vh' }}>
        <Canvas
          id="bg"
          camera={{
            fov: 20.,
            position: [8,5.8,8]
          }}
        >
          {/* <LightBulb position={[0, 4, 0]} /> */}
          <ambientLight color={'white'} intensity={0.5} />
          <pointLight color="blue" position={[5, 5.4, 6]} intensity={5} />
          {/* <pointLight color="royalblue" position={[0, 0, 15]} intensity={5} /> */}
          <axesHelper args={[10]} />
          {/* <Suspense fallback={null}>
            <Sphere position={[10, -2, -5]} rotation-x={10} rotation-y={0.42} rotation-z={0.8} />
          </Suspense> */}
          {/* <Suspense fallback={null}>
            <Sphere position={[0, 0, 0]} rotation-x={10} rotation-y={0.42} rotation-z={0.8} />
          </Suspense> */}
          <Suspense fallback={null}>
            <Sphere2 position={[7, 4.4, 6]} rotation-x={1} rotation-y={0} rotation-z={0} />
          </Suspense>
   
          <Reflector
            position={[7, 4.4, 6]}
            rotation-x={15} rotation-y={3} rotation-z={0}
            blur={[512, 512]} // Blur ground reflections (width, heigt), 0 skips blur
            mixBlur={0.75} // How much blur mixes with surface roughness
            mixStrength={0.25} // Strength of the reflections
            resolution={2024} // Off-buffer resolution, lower=faster, higher=better quality
            args={[7, 4]} // PlaneBufferGeometry arguments
            mirror={1} // Mirror environment, 0 = texture colors, 1 = pick up env colors
            minDepthThreshold={0.25}
            maxDepthThreshold={1}
            depthScale={50}
          ></Reflector>
          {/* <Floor position={[7, 4.4, 6]} rotation-x={15} rotation-y={0} rotation-z={0} /> */}
          <Draggable />
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}
// {console.log(document.getElementById('bg'))}
// ReactDOM.render(<Home />, document.querySelector('#root') )
