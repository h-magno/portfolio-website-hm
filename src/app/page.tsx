"use client";
import Image from 'next/image'
import { Anek_Telugu } from '@next/font/google'

import Navbar from './components/navbar/Navbar'

import { Canvas } from "@react-three/fiber";
import Floor from '../app/components/floor/Floor'
import BoxBg from './components/box-background/BoxBackground'
import LightBulb from './components/light-bulb/LightBulb'
import OrbitControls from './components/orbit-controls/OrbitControls'
import Draggable from '../app/components/draggable/Draggable'


import { useEffect, Suspense } from 'react';

const anekTelugu = Anek_Telugu({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

const css = {
  scene: {
    width:'100vw',
    height:'100vh',
  },
  canvas:{

  }
}

export default function Home() {

  return (
    <>
    <Navbar></Navbar>
    <main style={{
      paddingTop: '130px',
    }}>
      Hello World
      <div style={css.scene}>
        <Canvas
          shadows={true}
          style={css.canvas}
          camera={{
            position: [-6, 7, 7],
          }}
        > 
            <ambientLight color={"royalblue"} intensity={0.3} ></ambientLight>
            <LightBulb position={[0, 3, 0]} />

            <Suspense fallback={null}>
              <BoxBg rotateX={222} rotateY={10.2} />
            </Suspense> 

            <Floor position={[10, 0, 10]} />
            <Draggable></Draggable>
            <OrbitControls></OrbitControls>
        </Canvas>
      </div>
    {/* <canvas id="bg" >a</canvas> */}
    </main>
  </>
  )
}

