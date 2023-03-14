'use client';import React, { useEffect, useState, useRef, Suspense } from 'react';
import './index.css';
import { Canvas } from '@react-three/fiber';
import MyCameraRef from '../components/react-three-fiber/myCameraRef/MyCameraRef';
import Sphere2 from '../components/react-three-fiber/sphere2/Sphere2';
import ReflectorComp from '../components/reflector/ReflectorComp';
import Lastprojects from '../components/last-projects/LastProjects';
import MainProjects from '../components/main-projects/MainProjects';
import NewMainProjects from '../components/new-main-projects/NewMainProjects'
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { useWindowSize } from 'react-use';
import HomeTitle from '../components/HomeComps/home-title/HomeTitle';
import VideoTitle from '../components/HomeComps/home-video-title/VideoTitle';
import Footer from '../components/footer/Footer';
import HomeBG from '../components/HomeComps/home-background/HomeBG';

const Dashboard = () => {
    const { ref: refTitle, inView: titleEffect } = useInView();
    const { width: windowWidth, height: windowHeigh } = useWindowSize();

    return (
        <React.Fragment>
            <div
                className="paddingClamp  px-50 sm: container top-0 left-0 mx-auto flex-col-reverse justify-start gap-4 sm:flex sm:gap-2 sm:pt-0 md:flex md:grid-cols-1 md:pt-32 lg:grid lg:grid-cols-2 xl:grid"
                style={{
                    marginTop: windowWidth <= 768 ? '100px' : '',
                    height: windowWidth <= 1024 ? '' : '95svh'
                }}
            >
                <div
                    className={`slideRightLeft sm:mt-10 md:mt-10 md:pt-0 lg:mt-0 lg:pt-14`}
                >
                    <VideoTitle />
                </div>

                <div className="flex items-center justify-center align-middle md:pl-0 lg:pl-10 ">
                    <header
                        ref={refTitle}
                        className={`slideLeftRight relative z-10 flex flex-col justify-center text-center md:mt-0 lg:-mt-24 xl:-mt-32`}
                    >
                        <HomeTitle />
                    </header>
                </div>
            </div>

            <div className=" z-10 mb-5 flex h-16 items-center justify-center  ">
                <span className="absolute z-10">ÚLTIMOS PROJETOS</span>
            </div>
            <section
                id="mainProjectSection"
                className="paddingClamp mb-10 container mx-auto grid grid-cols-1 gap-4 sm:grid-cols-1 sm:gap-2"
            >
                <NewMainProjects/>
            </section>
            <div className=" z-10 my-5 flex h-16 items-center justify-center  ">
                <span className="absolute z-10">ÚLTIMOS PROJETOS</span>
            </div>
            <section
                id="mainProjectSection"
                className="paddingClamp mb-10 md:px-50 container mx-auto grid grid-cols-2 gap-4 sm:grid-cols-1 sm:gap-2"
            >
                <MainProjects />
            </section>

            {/* <div
                className={`z-10 my-5 flex h-16 items-center justify-center sm:mb-10`}
            >
                ÚLTIMOS PROJETOS
            </div> */}
            {/* <section
                id="lastProjectSection"
                className="paddingClamp container mx-auto grid grid-cols-3 gap-4 sm:gap-2"
            >
                <Lastprojects />
            </section> */}

            {/* <div className=" z-10 my-5 flex h-16  items-center justify-center">
                MAIS PROJETOS
            </div>
            <div className=" z-10 my-5 flex h-96 w-full items-center justify-center"></div> */}
            <Footer />
            <div
                style={{ height: '200vh' }}
                className="absolute top-0 -z-10 w-full"
            >
                <HomeBG />
            </div>
        </React.Fragment>
    );
};

export default Dashboard;
