'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import './NewMainProjects.css';
import { Button } from '@mui/material';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useWindowSize } from 'react-use';
import mainTemplatePng from '../../../../public/mainTemplatePng.png';

const MainProjects = () => {
    const { width: windowWidth, height: windowHeigh } = useWindowSize();
    const [data, setData] = useState<Array<any>>([]);
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

    return (
        <React.Fragment>
            {data.map((e, i) => {
                if (data[i].stargazers_count == '0') {
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
                            key={`main-projects-${i}`}
                            className="newMainBox flex w-full rounded-3xl border border-gray-800  sm:h-[750px] sm:flex-col md:h-[700px] md:flex-col lg:h-[500px] lg:flex-row"
                        >
                            <div className=" box-border sm:h-1/2 sm:w-full sm:px-10 sm:py-2 md:h-1/2 md:w-full md:py-2 lg:flex lg:h-full lg:w-1/2 lg:items-center lg:justify-center">
                                <div className="rounded-3xl bg-gray-500 sm:m-auto sm:aspect-video sm:h-full sm:w-full md:m-auto md:aspect-video md:h-full lg:aspect-square lg:h-[90%]">
                                    <div
                                        style={{
                                            backgroundImage: `url('${mainTemplatePng.src}')`,
                                            backgroundSize: 'contain',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center center'
                                        }}
                                        className="h-full w-full rounded-3xl"
                                    ></div>
                                </div>
                            </div>
                            <div className=" sm:h-1/2 sm:w-full md:h-1/2 md:w-full lg:flex lg:h-full lg:w-1/2  lg:items-center lg:justify-center lg:pr-10">
                                <div className=" sm:h-full sm:px-10 md:h-full md:px-10 lg:h-[90%] lg:w-full">
                                    <h2 className="flex h-1/5 items-center justify-center sm:my-2 md:my-2 text-4xl font-black capitalize">
                                        {data[i].name
                                            .replace('-hm', '')
                                            .replace('-', ' ')}
                                    </h2>
                                    <div className="h-1/5">
                                        <div
                                            tabIndex={0}
                                            className=" collapse-arrow collapse rounded-3xl border-2 border-green-600 bg-[#040C15]  text-white "
                                        >
                                            <div className="text-medium text-white-400 collapse-title font-thin">
                                                Recursos
                                            </div>
                                            <div className="collapse-content">
                                                {data[i].topics.map(
                                                    (e: Array<string>) => {
                                                        console.log(e);
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
                                    <div className="h-2/5 pt-5">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Sapiente architecto
                                        iure voluptas esse nostrum ab dicta
                                        ducimus facere quis! Fuga.
                                    </div>
                                    <div className="relative flex h-1/5 items-center justify-center sm:pb-5 md:pb-5">
                                        <button
                                            className={`mx-2 md:h-10
                                            h-3/5 w-1/2 rounded-2xl  border border-blue-600 bg-blue-600 bg-opacity-5 font-mono text-sm  font-extrabold text-blue-600 duration-500  hover:bg-opacity-10`}
                                        >
                                            Code
                                        </button>
                                        <button
                                            className={`mx-2 md:h-10
                                            h-3/5 w-1/2 rounded-2xl  border border-green-600 bg-green-600 bg-opacity-5 font-mono text-sm  font-extrabold text-green-600 duration-500  hover:bg-opacity-10`}
                                        >
                                            Live Demo
                                        </button>
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
