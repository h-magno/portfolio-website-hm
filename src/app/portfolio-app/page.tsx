'use client';
import { useEffect, useState, Suspense } from 'react';
import Navbar from '../components/navbar/Navbar';
import './font-import.css';
import { Canvas } from '@react-three/fiber';
import MyCameraRef from '../components/react-three-fiber/myCameraRef/MyCameraRef';
import Sphere2 from '../components/react-three-fiber/sphere2/Sphere2';
import ReflectorComp from '../components/reflector/ReflectorComp';

const homeStyle = {
  headlinePortfolio: {
    fontFamily: 'Anek Telugu',
    fontSize: '125px'
  },
  headlineHM: {
    fontFamily: 'Anek Telugu'
  }
};

const fakeProjects = [1, 2, 3, 4, 5, 6];


const Dashboard = () => {
  type Props = {
    children: React.ReactElement;
    waitBeforeShow?: number;
  };

  const [isShownOne, setIsShownOne] = useState(false);
  const [isShownTwo, setIsShownTwo] = useState(false);
  const [isShownThree, setIsShownThree] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShownOne(true);
    }, 450);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsShownTwo(true);
    }, 750);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsShownThree(true);
    }, 950);
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div
        className=" top-0 left-0 flex align-middle items-center justify-center flex-col w-full"
        style={{ height: '85svh' }}
      >
        <header className="text-center h-5/6 flex flex-col justify-center relative mb-10 z-10 ">
          <div className="flex flex-col -mb-9">
            <span className="font-extralight text-3xl">
              <span className="text-lime-400">Hello,</span> welcome to my web
            </span>
            <span
              className="font-extrabold"
              style={homeStyle.headlinePortfolio}
            >
              PORTFOLIO
            </span>
          </div>
          <div className="w-full absolute bottom-10">
            <span className="font-light text-base">Created by:</span>
            <span
              className="font-extrabold text-3xl tracking-wide ml-3"
              style={homeStyle.headlineHM}
            >
              HENRIQUE MAGNO
            </span>
          </div>
        </header>
      </div>

      <section className="container mx-auto grid gap-4 sm:grid-col-1 md:grid-cols-3 lg:grid-cols-3 p-8 sm:p-0 mb-4 h-96 ">
          {isShownOne ? <div className=" project-main w-full h-96  z-10 cursor-pointer"></div> : ''}
          {isShownTwo ? <div className=" project-main w-full h-96  z-10 cursor-pointer"></div> : ''}
          {isShownThree ? <div className=" project-main w-full h-96  z-10 cursor-pointer"></div> : ''}
      </section>
      <main className="container mx-auto grid gap-4 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 p-8 sm:p-0">

        {fakeProjects.map((projects, idx) => (
          <div className=" w-full h-96 bg-yellow-300 z-10 cursor-pointer"></div>
        ))}
      </main>

      <div className="home-bg absolute top-0 z-0 ">
        <div style={{ height: '200vh', width: '100vw' }}>
          <Canvas
            id="bg"
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
