'use client';
import { CSSProperties, Suspense } from 'react';
import Grid from '@mui/material/Grid';
import Navbar from '../components/navbar/Navbar';
import './font-import.css';
import { Canvas } from '@react-three/fiber';
import MyCameraRef from '../components/react-three-fiber/myCameraRef/MyCameraRef';
import Sphere2 from '../components/react-three-fiber/sphere2/Sphere2';
import Draggable from '../components/react-three-fiber/draggable/Draggable';
import OrbitControls from '../components/react-three-fiber/orbit-controls/OrbitControls';
import ReflectorComp from '../components/reflector/ReflectorComp';

const homeStyle = {
  headerHome: {
    textAlign: 'center',
    height: '85vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: '50px',
    zIndex: '98'
  },
  headlineBemVindo: {
    fontWeight: '200',
    fontSize: '30px'
  },
  headlinePortfolio: {
    fontFamily: 'Anek Telugu',

    fontWeight: '800',
    fontSize: '125px'
  },
  headlineCriadoPor: {
    fontWeight: '300',
    fontSize: '16px'
    // color: 'yellowgreen'
  },
  headlineHM: {
    fontFamily: 'Anek Telugu',
    fontWeight: '800',
    fontSize: '30px',
    letterSpacing: '1px',
    marginLeft: '10px'
  },
  headTxtDiv: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '-35px'
  },
  projectDiv: {
    width: '400px',
    height: '400px',
    background: 'white',
    margin: '5px',
    flexWrap: 'wrap',
    cursor: 'pointer'
  }
};

const fakeProjects = [1, 2, 3, 4, 5, 6];

const Dashboard = () => {
  return (
    <>
      <Navbar></Navbar>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          zIndex: '98'
        }}
      >
        <header style={homeStyle.headerHome as CSSProperties}>
          <div style={homeStyle.headTxtDiv as CSSProperties}>
            <span style={homeStyle.headlineBemVindo}>
              <span style={{ color: 'yellowgreen' }}>Hello,</span> welcome to my
              web
            </span>
            <span style={homeStyle.headlinePortfolio}>PORTFOLIO</span>
          </div>
          <div style={{ width: '100%', position: 'absolute', bottom: '10px' }}>
            <span style={homeStyle.headlineCriadoPor}>Created by:</span>
            <span style={homeStyle.headlineHM}>HENRIQUE MAGNO</span>
          </div>
        </header>
        <main
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Grid
            container
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >
            {fakeProjects.map((projects, idx) => (
              <Grid
                key={`projeto - ${idx}`}
                item
                xs={12}
                sm={5}
                md={3}
                xl={3}
                style={homeStyle.projectDiv as CSSProperties}
              ></Grid>
            ))}
          </Grid>
        </main>
      </div>
      <div className="home-bg" style={{ position: 'relative' }}>
        <div style={{ height: '200vh', width: '100vw' }}>
          <Canvas
            id="bg"
            camera={{
              fov: 20,
              position:
                document.documentElement.clientWidth <= 912
                  ? [8.696951760275208, 5.518582551921791
                    , 7.780485268135005]
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
            {/* <Floor position={[7, 4.4, 6]} rotation-x={15} rotation-y={0} rotation-z={0} /> */}
            <Draggable />
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
