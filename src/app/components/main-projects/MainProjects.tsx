'use client';import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import './MainProjects.css';
import { Button } from '@mui/material';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useWindowSize } from 'react-use';

const MainProjects = () => {
    const { width: windowWidth, height: windowHeigh } = useWindowSize();

    const router = useRouter();

    useEffect(() => {
        fetch('https://api.github.com/users/henrique-magno-dev/repos', {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_GIT}`
            }
        })
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    const [data, setData] = useState<Array<any>>([]);

    const projectImgUrlIndex = (projectIndex: any) => {
        let httpIndex = data[projectIndex].description.indexOf('http');
        return httpIndex;
    };
    const bgUrl = (projectIndex: any) => {
        let httpIndex = projectImgUrlIndex(projectIndex);
        let bgUrl = data[projectIndex].description.slice(httpIndex);
        return bgUrl;
    };

    return (
        <React.Fragment>
            {data.map((e, i) => {
                if (data[i].stargazers_count != '0') {
                    return (
                        <Tilt
                            glareEnable={true}
                            tiltMaxAngleX={2}
                            tiltMaxAngleY={2}
                            perspective={1000}
                            glareMaxOpacity={0.1}
                            glareColor={'#EBEAF0'}
                            glareReverse={true}
                            glareBorderRadius={'1.5rem'}
                        >
                            <div
                                key={`lastp-${i}`}
                                className="projectBoxClass  relative rounded-3xl border border-gray-800 p-4 lg:h-80  lg:p-4 "
                                onMouseOver={() => {}}
                                onMouseOut={() => {}}
                            >
                                <div className="flex items-center justify-center text-2xl font-black capitalize sm:my-3 md:mb-2 lg:h-1/6">
                                    {data[i].name
                                        .replace('-hm', '')
                                        .replace('-', ' ')}
                                </div>
                                <div className="flex sm:flex-col md:flex-col lg:h-4/5 lg:flex-row">
                                    <div className=" box-border sm:h-1/2 sm:w-full sm:px-10 sm:py-2 md:h-1/2 md:w-full md:py-2  lg:flex lg:h-full lg:w-1/2 lg:items-center lg:justify-center">
                                        <div className="md: rounded-3xl border border-gray-800 bg-gray-500 sm:m-auto sm:aspect-video sm:w-full md:m-auto md:aspect-video md:h-full lg:aspect-square lg:h-[90%]">
                                            <div
                                                style={{
                                                    backgroundImage: `url('${bgUrl(
                                                        i
                                                    )}')`,
                                                    backgroundSize: 'cover'
                                                }}
                                                className=" relative flex h-full w-full items-center justify-center overflow-y-hidden rounded-3xl"
                                            >
                                                <img
                                                    src={bgUrl(i)}
                                                    alt="Picture of the project"
                                                    className="porjectBoxAnimation absolute top-0"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:mt-3 sm:h-auto lg:w-1/2 lg:pl-2 ">
                                        <div className=" lg:h-4/5">
                                            <div className="md:mt-1 lg:h-2/5 ">
                                                <div
                                                    tabIndex={0}
                                                    className=" collapse-arrow collapse rounded-3xl border-2 border-green-600 bg-[#040C15]  text-white "
                                                >
                                                    <div className="text-medium text-white-400 collapse-title font-thin">
                                                        Recursos
                                                    </div>
                                                    <div className="collapse-content">
                                                        {data[i].topics.map(
                                                            (
                                                                e: Array<string>
                                                            ) => {
                                                                return (
                                                                    <div className="badge ml-1">
                                                                        #{e}
                                                                    </div>
                                                                );
                                                            }
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" lg:h-2/5">
                                                {windowWidth >= 1285
                                                    ? data[
                                                          i
                                                      ].description.substring(
                                                          0,
                                                          50
                                                      )
                                                    : windowWidth >= 1024
                                                    ? data[
                                                          i
                                                      ].description.substring(
                                                          0,
                                                          50
                                                      )
                                                    : ''}
                                            </div>
                                            <div className="flex sm:my-5 md:mt-5  md:h-1/5 lg:h-auto">
                                                <Link
                                                    href={`${data[i].html_url}`}
                                                    className="mr-2 h-full w-1/2 rounded-2xl border border-blue-600 bg-blue-600 bg-opacity-5 text-center font-black text-blue-600 duration-500 hover:bg-opacity-10 sm:py-3 md:py-3"
                                                >
                                                    Code
                                                </Link>
                                                <Link
                                                    href={`${data[i].homepage}`}
                                                    className="h-full w-1/2 rounded-2xl border border-green-600 bg-green-600 bg-opacity-5 text-center font-black text-green-600 duration-500 hover:bg-opacity-10 sm:py-3 md:py-3"
                                                >
                                                    Live Demo
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    );
                }
            })}
        </React.Fragment>
    );
};

export default MainProjects;
