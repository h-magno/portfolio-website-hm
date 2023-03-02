'use client';
import { useEffect, useState, Suspense } from 'react';
import Navbar from '../components/navbar/Navbar';
import './font-import.css';
import { Canvas } from '@react-three/fiber';
import MyCameraRef from '../components/react-three-fiber/myCameraRef/MyCameraRef';
import Sphere2 from '../components/react-three-fiber/sphere2/Sphere2';
import ReflectorComp from '../components/reflector/ReflectorComp';
import Lastprojects from '../components/last-projects/LastProjects';
import MainProjects from '../components/main-projects/MainProjects';
import Fab from '@mui/material/Fab';
import SettingsIcon from '@mui/icons-material/Settings';

const homeStyle = {
  // headlinePortfolio: {
  //   fontFamily: 'Anek Telugu',
  //   fontSize: '125px',
  //   marginTop: '10px'
  // },
  headlineHM: {
    fontFamily: 'Anek Telugu'
  }
};

const Dashboard = () => {
  return (
    <>
      <Navbar></Navbar>

      <div
        className=" top-0 left-0 flex align-middle items-center justify-center flex-col w-full"
        style={{ height: '80svh' }}
      >
        <header className="text-center h-5/6 flex flex-col justify-center relative mb-10 z-10 ">
          <div className="flex flex-col -mb-9">
            <span className="font-extralight textoCapa">
              <span className="text-lime-400">Olá,</span> bem-vindo ao meu web
            </span>
            <span
              className="tituloCapa font-extrabold"
              // style={homeStyle.headlinePortfolio}
            >
              PORTFÓLIO
            </span>
          </div>
          <div className="w-full absolute bottom-10">
            <span className="textoCapa2">Criado por:</span>
            <span
              className="font-extrabold textoCapa2 tracking-wide ml-3"
              style={homeStyle.headlineHM}
            >
              HENRIQUE MAGNO{' '}
              <Fab className="bg-blue-50  fixed bottom-10 right-10">
                <SettingsIcon />
              </Fab>
            </span>
          </div>
        </header>
      </div>
      <div className=" w-full h-16 z-10 flex justify-center items-center my-5  ">
        <span className='z-10 absolute'>PROJETOS PRINCIPAIS</span>
      </div>
      <section
        id="mainProjectSection"
        className="container paddingClamp mx-auto grid grid-cols-3 gap-4 sm:gap-2"
      >
        <MainProjects></MainProjects>
      </section>

      <div className=" w-full h-16 z-10 flex justify-center items-center my-5">
        ÚLTIMOS PROJETOS
      </div>
      <section
        id="lastProjectSection"
        className="container paddingClamp mx-auto grid grid-cols-3 gap-4 sm:gap-2"
      >
        <Lastprojects></Lastprojects>
      </section>

      <div className=" w-full h-16 z-10 flex justify-center items-center my-5">
        MAIS PROJETOS
      </div>
      <div style={{ zIndex: '-10' }} className="absolute top-0 ">
        <div style={{ height: '200vh', width: '100vw' }}>
          <Canvas
            camera={{
              fov: 20,
              position:
                document.documentElement.clientWidth <= 912
                  ? [8.696951760275208, 5.518582551921791, 7.780485268135005]
                  : document.documentElement.clientWidth <= 1090
                  ? [8, 5.8, 8.2]
                  : [8.456852303528139, 5.451671860941685, 7.850283038832504]
            }}
          >
            <ambientLight color={'white'} intensity={0.5} />
            <pointLight
              // color="rgb(0, 105, 179, 1)"
              color="blue"
              position={[5, 5.4, 6]}
              intensity={5}
            />
            <axesHelper args={[10]} />
            <MyCameraRef></MyCameraRef>
            <Suspense fallback={null}>
              <Sphere2
                position={[7, 4.4, 6]}
                rotation-x={1}
                rotation-y={0}
                rotation-z={0}
              />
            </Suspense>
            <ReflectorComp
              position={[7, 4.4, 6]}
              rotation-x={15}
              rotation-y={3}
            />
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
