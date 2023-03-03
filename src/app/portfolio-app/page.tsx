'use client';
import { useEffect, useState, useRef, Suspense } from 'react';
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
import SmoothScroll from '../components/smooth-scroll/SmoothScrool';

const homeStyle = {
  headlineHM: {
    fontFamily: 'Anek Telugu'
  }
};

const clientWidth = () => {
  window.addEventListener('resize', () => {
    let larguraTela = document.documentElement.clientWidth;

    return larguraTela <= 912 ? [6.77, 4.36, 6.05] : [7, 4.4, 6];
  });
};

const Dashboard = () => {
  const myTitle = useRef<any>('');
  const [myTitleState, setMyTitleState] = useState<boolean>();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMyTitleState(entry.isIntersecting);
    });

    observer.observe(myTitle.current);
  }, []);

  let myDocument = document.documentElement.clientWidth;

  window.addEventListener('resize', () => {
    let myDocument = document.documentElement.clientWidth;

    return myDocument;
  });

  const slideInAnimation = () => {
    return myTitleState ? 'animacaoTituloCapa' : '';
  };

  return (
    <>
      <SmoothScroll />
      <Navbar></Navbar>
      <Fab className="bg-blue-50  fixed bottom-10 right-10">
        <SettingsIcon />
      </Fab>
      <div
        className=" top-0 left-0 flex align-middle items-center justify-center flex-col w-full"
        style={{ height: '80svh' }}
      >
        <header className="text-center h-5/6 flex flex-col justify-center relative mb-10 z-10 ">
          <div className="flex flex-col -mb-9">
            <span className={`${slideInAnimation()} font-extralight textoCapa`}>
              <span className="text-lime-400">Olá,</span> bem-vindo ao meu web
            </span>
            <span
              ref={myTitle}
              className={`${slideInAnimation()} tituloCapa font-extrabold`}
            >
              {' '}
              PORTFÓLIO{' '}
            </span>
          </div>
          <div className={`${slideInAnimation()} w-full absolute bottom-10`}>
            <span className="textoCapa2">Criado por:</span>
            <span
              className="font-extrabold textoCapa2 tracking-wide ml-3"
              style={homeStyle.headlineHM}
            >
              HENRIQUE MAGNO{' '}
            </span>
          </div>
        </header>
      </div>
      <div className=" w-full h-16 z-10 flex justify-center items-center my-5  ">
        <span className="z-10 absolute">PROJETOS PRINCIPAIS</span>
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
              position: [
                8.456852303528139, 5.451671860941685, 7.850283038832504
              ]
            }}
          >
            <ambientLight color={'white'} intensity={0.5} />
            <pointLight color="blue" position={[5, 5.4, 6]} intensity={5} />
            <axesHelper args={[10]} />
            <MyCameraRef></MyCameraRef>
            <Suspense fallback={null}>
              <Sphere2
                position={myDocument <= 912 ? [6.77, 4.36, 6.05] : [7, 4.4, 6]}
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
