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

    console.log(windowHeigh, windowWidth);

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
    let counter = -1;
    const mainProjects =
        document.getElementById('mainProjectSection')?.childNodes;

    
    return (
        <React.Fragment>
            {data.map((e, i) => {
                if (data[i].stargazers_count != '0') {
                    counter++;
                    return (
                        <div
                            key={`lastp-${i}`}
                            className="projectBox"
                            id={`main-projects-${counter}`}
                            onMouseOver={() => {
                                mainProjects?.forEach((e, i) => {
                                    let projectGroup = document.getElementById(
                                        `main-projects-${i}`
                                    );
                                    if (projectGroup != null) {
                                        projectGroup.style.transform =
                                            'scale(0.95)';
                                        projectGroup.style.transitionDuration =
                                            '0.2s';
                                    }
                                });
                            }}
                            onMouseOut={() => {
                                {
                                    mainProjects?.forEach((e, i) => {
                                        let projectGroup =
                                            document.getElementById(
                                                `main-projects-${i}`
                                            );
                                        if (projectGroup != null) {
                                            projectGroup.style.transform =
                                                'scale(1)';
                                            projectGroup.style.transitionDuration =
                                                '0.5s';
                                        }
                                    });
                                }
                            }}
                            onClick={() => router.push(`portfolio-app/${i}`)}
                        >
                            <Tilt
                                glareEnable={true}
                                tiltMaxAngleX={5}
                                tiltMaxAngleY={5}
                                perspective={1000}
                                glareMaxOpacity={0.5}
                                glareColor={'#9acd32'}
                                glareReverse={true}
                                glareBorderRadius={'1.5rem'}
                            >
                                <div
                                    id={`projectBoxId-${counter}`}
                                    className="projectBoxClass motherDiv relative cursor-pointer rounded-3xl bg-gradient-to-t from-lime-800 to-lime-500 sm:h-40 sm:py-5 md:h-48 md:p-0 lg:h-96 "
                                >
                                    <div
                                        className="tituloConteudo flex  items-center justify-center sm:hidden md:h-1/5"
                                    >
                                        <h1 className="titulo   font-bold capitalize   ">
                                            {data[i].name
                                                .replace('-hm', '')
                                                .replace('-', ' ')}
                                        </h1>
                                    </div>
                                    <div className="texto flex px-5 sm:h-full sm:pb-0 md:h-3/5 md:pb-5 ">
                                        <div className="flex items-center justify-center rounded-3xl xs:w-2/4 sm:w-4/12 sm:pl-10 md:w-4/12 lg:w-2/4">
                                            <div className="flex h-full w-full items-center justify-center rounded-3xl border-2">
                                                IMAGEM
                                            </div>
                                        </div>
                                        <div className="pl-5 sm:w-3/5 sm:text-left  md:flex md:w-3/4 md:items-center lg:block lg:w-2/4">
                                            <div className="titulo hidden h-1/4 text-xl font-extrabold sm:block sm:text-center">
                                                {' '}
                                                {data[i].name
                                                    .replace('-hm', '')
                                                    .replace('-', ' ')}
                                            </div>
                                            <div className="h-3/4 leading-4  sm:hidden md:leading-normal">
                                                {windowWidth >= 1024
                                                    ? data[
                                                          i
                                                      ].description.substring(
                                                          0,
                                                          100
                                                      )
                                                    : data[
                                                          i
                                                      ].description.substring(
                                                          0,
                                                          30
                                                      )}
                                                ...
                                            </div>

                                            <div className="bottomBtn mt-10 flex h-2/5 items-center justify-center text-sm  duration-500 hover:bg-white hover:bg-opacity-10 md:hidden ">
                                                ver mais
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottomBtn absolute bottom-0  flex w-full sm:hidden md:h-1/5 lg:h-1/5">
                                        <div className="border-b-1  flex h-full w-full items-center justify-center rounded-b-3xl text-sm duration-500 hover:bg-white hover:bg-opacity-10 ">
                                            ver mais
                                        </div>
                                    </div>
                                </div>
                            </Tilt>
                        </div>
                    );
                }
            })}
        </React.Fragment>
    );
};

export default MainProjects;
