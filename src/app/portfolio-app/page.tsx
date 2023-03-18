'use client'

import React, {} from 'react'
import './index.css'
import { useInView } from 'react-intersection-observer'
import Tilt from 'react-parallax-tilt'
import { useWindowSize } from 'react-use'
import MainProjects from '../components/main-projects/MainProjects'
import NewMainProjects from '../components/new-main-projects/NewMainProjects'
import HomeTitle from '../components/HomeComps/home-title/HomeTitle'
import VideoTitle from '../components/HomeComps/home-video-title/VideoTitle'
import Footer from '../components/footer/Footer'
import HomeBG from '../components/HomeComps/home-background/HomeBG'

// ! TESTANDO BETTER COMMENTS - não use
// * TESTANDO BETTER COMMENTS - importante
// ? TESTANDO BETTER COMMENTS? - questão
// TODO: Testando better comments - to do

const teste = 'teste'
// * Super console log, CTRL + ALT + L
console.log('🚀 ~ file: page.tsx:24 ~ teste:', teste)

const Dashboard = () => {
  const { ref: refTitle } = useInView()
  const { width: windowWidth } = useWindowSize()

  return (
    <>
      <div
        className="paddingClamp sm:flex sm:flex-col-reverse md:flex md:flex-col-reverse md:pt-32 lg:grid lg:grid-cols-2  lg:pt-0  "
        style={{
          marginTop: windowWidth <= 768 ? '100px' : '',
          height: windowWidth <= 1024 ? '' : '95svh',
        }}
      >
        <div
          className=" slideRightLeft  md:paddingClamp sm:my-20 md:m-auto md:my-10 md:w-4/5 lg:my-0 lg:flex lg:w-full lg:items-center lg:justify-center lg:pt-16 xl:w-full 2xl:w-[800px]"
        >
          <Tilt
            glareEnable
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            glareMaxOpacity={0.1}
            glareColor="#EBEAF0"
            glareReverse
            glareBorderRadius="1.5rem"
          >
            <VideoTitle />
          </Tilt>
        </div>

        <div className=" flex w-full items-center justify-center align-middle md:pl-0 lg:pl-10 ">
          <header ref={refTitle} className="slideLeftRight relative z-10 flex flex-col justify-center text-center">
            <HomeTitle />
          </header>
        </div>
      </div>

      <div className=" z-10 mb-5 flex h-16 items-center justify-center  ">
        <span className="absolute z-10">PROJETOS PRINCIPAIS</span>
      </div>
      <section id="mainProjectSection" className="paddingClamp container mx-auto mb-10 grid grid-cols-1 gap-4 sm:grid-cols-1 2xl:px-52 2lg:px-0 ">
        <NewMainProjects />
      </section>

      <div className=" z-10 my-5 flex h-16 items-center justify-center  ">
        <span className="absolute z-10">ÚLTIMOS PROJETOS</span>
      </div>
      <section
        id="mainProjectSection"
        className="paddingClamp md:px-50 container mx-auto mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-2 lg:px-0 xl:px-52 2lg:px-0 "
      >
        <MainProjects />
      </section>

      <Footer />
      <div style={{ height: '200vh' }} className="absolute top-0 -z-10 w-full">
        <HomeBG />
      </div>
    </>
  )
}

export default Dashboard
