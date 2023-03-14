'use client';
import Image from 'next/image';
import { useEffect, Suspense, useRef, useState } from 'react';

import { Canvas, extend } from '@react-three/fiber';
import Floor from './components/react-three-fiber/floor/Floor';
import Sphere from './components/react-three-fiber/sphere/Sphere';
import Sphere2 from './components/react-three-fiber/sphere2/Sphere2';
import LightBulb from './components/react-three-fiber/light-bulb/LightBulb';
import OrbitControls from './components/react-three-fiber/orbit-controls/OrbitControls';
import Draggable from '../app/components/react-three-fiber/draggable/Draggable';
import * as THREE from 'three';
// import Navbar from './components/navbar/Navbar';
import { Reflector } from '@react-three/drei';
import MyCameraRef from './components/react-three-fiber/myCameraRef/MyCameraRef';
import ReflectorComp from './components/reflector/ReflectorComp';
import SphereTres from './components/react-three-fiber/sphere3/Sphere3';



extend(THREE);

export default function Home() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      {/* <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: '2000px',
          display: 'flex',
          background: 'trasnparent',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: '98'
        }}
      >
        <h1 className="text-2xl font-bold underline text-green-700">
          Hola quaa tal
        </h1>
      </div> */}
      <div
        className="home-bg"
        style={{ position: 'absolute', top: 0, zIndex: '90' }}
      >
        <div style={{ height: '100vh', width: '100vw' }}>
          <Canvas
            id="bg"
            camera={{
              fov: 20,
              position:
                document.documentElement.clientWidth <= 912
                  ? [7.755644336365776, 5.1526787091636335, 6.999997432913748]
                  : document.documentElement.clientWidth <= 1090
                  ? [8, 5.8, 8.2]
                  : [7.506911085205941, 5.1183933233551, 7.074502693421444]
            }}
          >
            <MyCameraRef />
            <ambientLight color={'white'} intensity={0.5} />
            <pointLight color="blue" position={[5, 5.4, 6]} intensity={5} />
            <axesHelper args={[10]} />


              <Suspense fallback={null} >
                <Sphere2 position={[7, 4.4, 6]} rotation-x={1} />
              </Suspense>
       

    
            <ReflectorComp
              position={[7, 4.4, 6]}
              rotation-x={15}
              rotation-y={3}
            ></ReflectorComp>
            <Draggable />
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </>
  );
}
{
  /* <Floor position={[7, 4.4, 6]} rotation-x={15} rotation-y={0} rotation-z={0} /> */
}

{
  /* <Suspense fallback={null}>
                <Sphere position={[10, -2, -5]} rotation-x={10} rotation-y={0.42} rotation-z={0.8} />
              </Suspense> */
}
{
  /* <Suspense fallback={null}>
                <Sphere position={[0, 0, 0]} rotation-x={10} rotation-y={0.42} rotation-z={0.8} />
              </Suspense> */
}
{
  /* <Suspense fallback={null}>
              <Sphere2 position={[7, 4.4, 6]} rotation-x={1} />
            </Suspense> */
}
