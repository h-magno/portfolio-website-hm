'use client';
import { useEffect, useState, Suspense } from 'react';
import Navbar from '../components/navbar/Navbar';
import './font-import.css';
import { Canvas } from '@react-three/fiber';
import MyCameraRef from '../components/react-three-fiber/myCameraRef/MyCameraRef';
import Sphere2 from '../components/react-three-fiber/sphere2/Sphere2';
import ReflectorComp from '../components/reflector/ReflectorComp';
import Lastprojects from '../components/last-projects/LastProjects';
import Tilt from 'react-parallax-tilt';
import MainProjects from '../components/main-projects/MainProjects';

const homeStyle = {
  headlinePortfolio: {
    fontFamily: 'Anek Telugu',
    fontSize: '125px',
    marginTop: '10px'
  },
  headlineHM: {
    fontFamily: 'Anek Telugu'
  }
};

const Dashboard = () => {
  setTimeout(() => {
    setIsShown1(true);
  }, 450);
  setTimeout(() => {
    setIsShown2(true);
  }, 750);

  setTimeout(() => {
    setIsShown3(true);
  }, 950);

  function mainMouseOver() {
    if (mainProjects) {
      mainProjects.forEach((e, i) => {
        let projectGroup = document.getElementById(`mainProject-${i}`);
        if (projectGroup != null) {
          projectGroup.style.transform = 'scale(0.95)';
          projectGroup.style.transitionDuration = '0.2s';
        }
      });
    }
  }
  function mainMouseOut() {
    if (mainProjects) {
      mainProjects.forEach((e, i) => {
        let projectGroup = document.getElementById(`mainProject-${i}`);
        if (projectGroup != null) {
          projectGroup.style.transform = 'scale(1)';
          projectGroup.style.transitionDuration = '0.2s';
        }
      });
    }
  }

  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);

  const mainProjects =
    document.getElementById('mainProjectSection')?.childNodes;

  return (
    <>
      <Navbar></Navbar>
      <div
        className=" top-0 left-0 flex align-middle items-center justify-center flex-col w-full"
        style={{ height: '80svh' }}
      >
        <header className="text-center h-5/6 flex flex-col justify-center relative mb-10 z-10 ">
          <div className="flex flex-col -mb-9">
            <span className="font-extralight text-3xl">
              <span className="text-lime-400">Olá,</span> bem-vindo ao meu web
            </span>
            <span
              className="font-extrabold"
              style={homeStyle.headlinePortfolio}
            >
              PORTFÓLIO
            </span>
          </div>
          <div className="w-full absolute bottom-10">
            <span className="font-light text-base">Criado por:</span>
            <span
              className="font-extrabold text-3xl tracking-wide ml-3"
              style={homeStyle.headlineHM}
            >
              HENRIQUE MAGNO
            </span>
          </div>
        </header>
      </div>

      <div className=" w-full h-16 z-10 flex justify-center items-center my-5">
        PROJETOS PRINCIPAIS
      </div>

      {/* {isShown1 ? (
          
            <div
              id="mainProject-0"
              onMouseOver={mainMouseOver}
              onMouseOut={mainMouseOut}
              className="mainProjects bg-white bg-blue w-full h-96 rounded-3xl z-10 cursor-pointer "
            ></div>
          
        ) : (
          ''
        )}
        {isShown2 ? (
          <div
            id="mainProject-1"
            onMouseOver={mainMouseOver}
            onMouseOut={mainMouseOut}
            className="mainProjects bg-white w-full h-96 rounded-3xl z-10 cursor-pointer "
          ></div>
        ) : (
          ''
        )}
        {isShown3 ? (
          <div
            id="mainProject-2"
            onMouseOver={mainMouseOver}
            onMouseOut={mainMouseOut}
            className="mainProjects bg-white w-full h-96 rounded-3xl z-10 cursor-pointer "
          ></div>
        ) : (
          ''
        )} */}

      <section
        id="mainProjectSection"
        className="container mx-auto grid lg:grid-cols-3 md:grid-cols-3 gap-4 sm:grid-cols-1"
      >
        <MainProjects></MainProjects>
      </section>

      <div className=" w-full h-16 z-10 flex justify-center items-center my-5">
        ÚLTIMOS PROJETOS
      </div>
      <section
        id="lastProjectSection"
        className="container mx-auto lg:px-40 sm:px-10 grid lg:grid-cols-3 md:grid-cols-2 gap-4 sm:grid-cols-1 "
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
            <pointLight color="blue" position={[5, 5.4, 6]} intensity={5} />
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
