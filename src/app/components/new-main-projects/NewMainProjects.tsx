'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Tilt from 'react-parallax-tilt'
import './NewMainProjects.css'

const NewMainProject = () => {
  interface IDataProject {
    name: string
    title: string
    description: string
    image: string
    link: string
    topics: string[]
    html_url: string
    homepage: string
    stargazers_count: string
  }

  const [data, setData] = useState<IDataProject[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/henrique-magno-dev/repos', {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_GIT}`,
      },
    })
      .then((res) => res.json())
      .then((dataFetch) => { setData(dataFetch) })
  }, [])

  const bgUrl = (projectIndex: number): string => {
    const httpIndexFinder = data[projectIndex].description.indexOf('http')
    const bgUrlValue = data[projectIndex].description.slice(httpIndexFinder)
    return bgUrlValue
  }

  return (

    <>
      {data.map((projeto, i) => {
        if (parseFloat(data[i].stargazers_count) === 0) {
          return (
            <Tilt
              glareEnable
              tiltMaxAngleX={2}
              tiltMaxAngleY={2}
              perspective={1000}
              glareMaxOpacity={0.1}
              glareColor="#EBEAF0"
              glareReverse
              glareBorderRadius="1.5rem"
            >

              <div className="newMainBox m-auto flex w-full rounded-3xl border border-gray-800 sm:h-auto sm:flex-col md:flex-col lg:h-[500px] lg:flex-row">
                <div className=" box-border sm:h-1/2 sm:w-full sm:px-10 sm:py-2 md:h-1/2 md:w-full md:py-2 md:px-10 lg:flex lg:h-full lg:w-1/2 lg:items-center lg:justify-center">
                  <div className="border border-gray-800 bg-gray-500 sm:m-auto sm:aspect-video sm:h-full sm:w-full md:m-auto md:aspect-video  md:h-full md:rounded-3xl lg:aspect-square lg:h-[90%]">
                    <Link
                      href={`${data[i].homepage}`}
                      id={`link-${i}`}
                      onMouseOver={() => {
                        const linkHeightAnimation: HTMLElement | null = document.getElementById(`link-${i}`)
                        const myImg = document.getElementById(`img-${i}`) as HTMLElement

                        const LinkHeight = window.getComputedStyle(linkHeightAnimation!, null).getPropertyValue('height')
                        myImg.style.transitionDuration = '10s'
                        myImg.style.transform = `translateY(calc(-100% + ${LinkHeight}))`
                      }}
                      onMouseOut={() => {
                        const myImg = document.getElementById(`img-${i}`) as HTMLElement
                        myImg.style.transitionDuration = '0s'
                        myImg.style.transform = 'translateY(-0%)'
                      }}
                      className=" relative flex h-full w-full items-center justify-center overflow-y-hidden rounded-3xl"
                    >
                      <img
                        id={`img-${i}`}
                        src={bgUrl(i)}
                        alt="Project Background"
                        className="absolute top-0 flex items-center justify-center ease-in-out"
                      />
                    </Link>
                  </div>
                </div>
                <div className=" sm:h-1/2 sm:w-full md:h-1/2 md:w-full lg:flex lg:h-full lg:w-1/2  lg:items-center lg:justify-center lg:pr-10">
                  <div className=" sm:h-full sm:px-10 md:h-full md:px-10 lg:h-[90%] lg:w-full">
                    <h2 className="flex h-1/5 items-center justify-center text-4xl font-black capitalize sm:my-5 md:my-5 ">
                      {data[i].name.replace('-hm', '').replace('-', ' ')}
                    </h2>
                    <div className="h-1/5">
                      <div tabIndex={0} className=" collapse-arrow collapse rounded-3xl border-2 border-green-600 bg-[#040C15]  text-white ">
                        <div className="text-medium text-white-400 collapse-title font-thin">Recursos</div>
                        <div className="collapse-content">
                          {data[i].topics.map((topics: string) => (
                            <div key={`badge-${topics}`} className="badge ml-1 border-gray-800 bg-gray-600 text-white">
                              #
                              {topics}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex h-2/5 justify-center sm:my-10 sm:items-center md:my-10 md:items-center lg:my-0 lg:items-start">
                      {data[i].description.slice(0, data[i].description.indexOf('http'))}
                    </div>
                    <div className=" flex h-1/5 items-center justify-center sm:my-5 md:my-5 lg:my-0 lg:pb-10 ">
                      <Link
                        href={`${data[i].html_url}`}
                        className="mr-2  w-1/2 rounded-2xl border border-blue-600 bg-blue-600 bg-opacity-5 text-center font-black text-blue-600 duration-500 hover:bg-opacity-10  sm:py-3 md:py-3"
                      >
                        Code
                      </Link>
                      <Link
                        href={`${data[i].homepage}`}
                        className=" w-1/2 rounded-2xl border border-green-600 bg-green-600 bg-opacity-5 text-center font-black text-green-600 duration-500 hover:bg-opacity-10  sm:py-3 md:py-3"
                      >
                        Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          )
        }
        return ''
      })}
    </>
  )
}

export default NewMainProject
