'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Tilt from 'react-parallax-tilt'
import './MainProjects.css'
import { useWindowSize } from 'react-use'

const MainProjects = () => {
  const { width: windowWidth } = useWindowSize()
  const [data, setData] = useState<Array<any>>([])

  useEffect(() => {
    fetch('https://api.github.com/users/henrique-magno-dev/repos', {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_GIT}`,
      },
    })
      .then((res) => res.json())
      .then((dataFetch) => setData(dataFetch))
  }, [])

  const projectImgUrlIndex = (projectIndex: any) => {
    const httpIndex = data[projectIndex].description.indexOf('http')
    return httpIndex
  }
  const bgUrl = (projectIndex: any) => {
    const httpIndex = projectImgUrlIndex(projectIndex)
    const bgUrlValue = data[projectIndex].description.slice(httpIndex)
    return bgUrlValue
  }

  const description = (projectIndex: any) => {
    if (windowWidth >= 1285) {
      return data[projectIndex].description.substring(0, 50)
    }
    if (windowWidth >= 1024) {
      return data[projectIndex].description.substring(0, 50)
    }
    return 0
  }

  return (
    <>
      {data.map((e, i) => {
        if (data[i].stargazers_count !== '0') {
          return (
            <Tilt
              glareEnable
              tiltMaxAngleX={5}
              tiltMaxAngleY={windowWidth >= 768 ? 5 : 25}
              perspective={1000}
              glareMaxOpacity={0.1}
              glareColor="#EBEAF0"
              glareReverse
              glareBorderRadius="1.5rem"
            >
              <div
                key={`last-projects-${e}`}
                className="projectBoxClass relative rounded-3xl border border-gray-800 p-4 lg:h-80  lg:p-4 "
              >
                <div className="flex items-center justify-center text-2xl font-black capitalize sm:mt-3 sm:text-center sm:text-xl md:mb-2 lg:h-1/6">
                  {data[i].name.replace('-hm', '').replace('-', ' ')}
                </div>
                <div className="flex sm:flex-col md:flex-col lg:h-4/5 lg:flex-row">
                  <div className=" box-border sm:h-1/2 sm:w-full sm:px-10 sm:py-1 md:h-1/2 md:w-full md:py-2  lg:flex lg:h-full lg:w-1/2 lg:items-center lg:justify-center">
                    <div className="rounded-3xl border border-gray-800 bg-gray-500 sm:m-auto sm:hidden sm:aspect-video sm:w-full md:m-auto md:aspect-video md:h-full lg:aspect-square lg:h-[90%]">
                      <Link
                        href={`${data[i].homepage}`}
                        style={{
                          backgroundImage: `url('${bgUrl(i)}')`,
                          backgroundSize: 'cover',
                        }}
                        className=" relative flex h-full w-full items-center justify-center overflow-y-hidden rounded-3xl"
                      />
                    </div>
                  </div>
                  <div className="sm:mt-3 sm:h-auto lg:w-1/2 lg:pl-2 ">
                    <div className=" lg:h-4/5">
                      <div className="md:mt-1 lg:h-2/5 ">
                        <div
                          tabIndex={0}
                          className=" collapse rounded-3xl border-2  border-green-600 bg-[#040C15] text-white md:collapse-arrow lg:collapse-arrow  sm:text-center "
                        >
                          <div className="text-medium text-white-400 collapse-title font-thin sm:px-0">Recursos</div>
                          <div className="collapse-content">
                            {data[i].topics.map((topic: Array<string>) => (
                              <div className="badge ml-1 border-gray-800 bg-gray-600 text-white">
                                #
                                {topic}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className=" lg:h-2/5">
                        {description(i)}
                      </div>
                      <div className="flex sm:mt-5  md:mt-5  md:h-1/5 lg:h-auto">
                        <Link
                          href={`${data[i].html_url}`}
                          className="mr-2 h-full w-1/2 rounded-2xl  border border-blue-600 bg-blue-600 bg-opacity-5 text-center font-black text-blue-600 duration-500 hover:bg-opacity-10 sm:w-full sm:py-3 md:py-3"
                        >
                          Code
                        </Link>
                        <Link
                          href={`${data[i].homepage}`}
                          className="h-full w-1/2 rounded-2xl border  border-green-600 bg-green-600 bg-opacity-5 text-center font-black text-green-600 duration-500 hover:bg-opacity-10 sm:w-full sm:py-3 md:py-3"
                        >
                          Demo
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          )
        }
        return null
      })}
    </>
  )
}

export default MainProjects
