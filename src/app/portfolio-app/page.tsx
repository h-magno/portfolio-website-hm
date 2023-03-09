'use client';import React, { useEffect, useState, useRef, Suspense } from 'react';
import './index.css';
import { Canvas } from '@react-three/fiber';
import MyCameraRef from '../components/react-three-fiber/myCameraRef/MyCameraRef';
import Sphere2 from '../components/react-three-fiber/sphere2/Sphere2';
import ReflectorComp from '../components/reflector/ReflectorComp';
import Lastprojects from '../components/last-projects/LastProjects';
import MainProjects from '../components/main-projects/MainProjects';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { useWindowSize } from 'react-use';

const homeStyle = {
    headlineHM: {
        fontFamily: 'Anek Telugu'
    }
};

const Dashboard = () => {
    const { ref: refTitle, inView: titleEffect } = useInView();
    const { width: windowWidth, height: windowHeigh } = useWindowSize();

    const slideLeftRight = () => {
        return titleEffect ? 'slideLeftRight' : '';
    };
    const slideRightLeft = () => {
        return titleEffect ? 'slideRightLeft' : '';
    };

    return (
        <React.Fragment>
            <div
                className="paddingClamp px-50 sm: container top-0 left-0 mx-auto flex-col-reverse justify-start gap-4 sm:flex sm:gap-2 sm:pt-0 md:flex md:grid-cols-1 md:pt-32 lg:grid lg:grid-cols-2 xl:grid"
                style={{
                    marginTop: windowWidth <= 768 ? ('100px') : (''),
                    height: windowWidth <= 1024 ? '' : '82svh'
                }}
            >
                <div className="sm:mt-10 md:mt-10 lg:mt-0 lg:pt-14 md:pt-0">
                    <Tilt
                        className={' rounded-3xl'}
                        glareEnable={true}
                        tiltMaxAngleX={5}
                        tiltMaxAngleY={5}
                        perspective={1000}
                        glareMaxOpacity={0.5}
                        glareColor={'#001fff'}
                        glareReverse={true}
                        glareBorderRadius={'1.5rem'}
                    >
                        <div
                            className={`${slideRightLeft()} aspect-video  w-full rounded-3xl bg-gray-600`}
                        ></div>{' '}
                    </Tilt>
                </div>

                <div className="flex items-center justify-center align-middle md:pl-0 lg:pl-10 ">
                    <header className="relative z-10 flex h-5/6 flex-col justify-center text-center   ">
                        <div className="-mb-9 flex flex-col">
                            <span
                                className={`${slideLeftRight()} textoCapa font-extralight`}
                            >
                                <span className="text-lime-400">Olá,</span>{' '}
                                bem-vindo ao meu web
                            </span>
                            <span
                                ref={refTitle}
                                className={`${slideLeftRight()} tituloCapa font-extrabold`}
                            >
                                PORTFÓLIO
                            </span>
                        </div>
                        <div
                            className={`${slideLeftRight()} w-full sm:mt-10 md:mt-10 lg:mt-5`}
                        >
                            <span className="textoCapa2">Criado por:</span>
                            <span
                                className="textoCapa2 ml-3 font-extrabold tracking-wide"
                                style={homeStyle.headlineHM}
                            >
                                HENRIQUE MAGNO
                            </span>
                        </div>
                    </header>
                </div>
            </div>

            <div className=" z-10 my-5 flex h-16 w-full items-center justify-center  ">
                <span className="absolute z-10">PROJETOS PRINCIPAIS</span>
            </div>
            <section
                id="mainProjectSection"
                className="paddingClamp md:px-50 container mx-auto grid grid-cols-2 gap-4 sm:grid-cols-1 sm:gap-2"
            >
                <MainProjects></MainProjects>
            </section>

            <div
                className={`z-10 my-5 flex h-16 w-full items-center justify-center sm:mb-10`}
            >
                ÚLTIMOS PROJETOS
            </div>
            <section
                id="lastProjectSection"
                className="paddingClamp container mx-auto grid grid-cols-3 gap-4 sm:gap-2"
            >
                <Lastprojects></Lastprojects>
            </section>

            <div className=" z-10 my-5 flex h-16 w-full items-center justify-center">
                MAIS PROJETOS
            </div>
            <div
                style={{ height: '200vh' }}
                className="absolute top-0 -z-10 w-full"
            >
                <Canvas
                    camera={{
                        fov: 20,
                        position: [
                            8.456852303528139, 5.451671860941685,
                            7.850283038832504
                        ]
                    }}
                >
                    <ambientLight color={'blue'} intensity={0.5} />
                    <pointLight
                        color={'blue'}
                        position={[5, 5.4, 6]}
                        intensity={5}
                    />
                    <axesHelper args={[10]} />
                    <MyCameraRef></MyCameraRef>
                    <Suspense fallback={null}>
                        <Sphere2
                            position={
                                windowWidth <= 912
                                    ? [6.77, 4.36, 6.05]
                                    : [7, 4.4, 6]
                            }
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
        </React.Fragment>
    );
};

export default Dashboard;
