'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import './MainProjects.css';
import { Button } from '@mui/material';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useWindowSize } from 'react-use';
import mainTemplate from '../../../../public/mainTemplate.jpg';

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
                        >
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
                                    id={`projectBoxId-${counter}`}
                                    className="projectBoxClass  relative cursor-pointer items-center justify-center  rounded-3xl border border-gray-700 px-5 pb-5 sm:h-auto md:w-auto md:h-auto lg:h-96"
                                >
                                    <div className="z-50 my-5 w-full  text-center text-2xl font-extrabold capitalize md:mb-0">
                                        {data[i].name
                                            .replace('-hm', '')
                                            .replace('-', ' ')}
                                    </div>
                                    <div className="flex h-4/5 items-center justify-center">
                                        <div className="w-5/12  ">
                                            <div className="w-full sm:h-48 md:h-32 lg:h-52  xs:h-32 ">
                                                <div
                                                    style={{
                                                        backgroundImage: `url('${mainTemplate.src}')`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition:
                                                            'center center'
                                                    }}
                                                    className="h-full w-full rounded-3xl"
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="w-7/12 pl-5">
                                            <div
                                                tabIndex={0}
                                                className=" collapse-arrow collapse rounded-3xl border-2 border-gray-600 bg-gray-900 text-white"
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
                                            <div className=" leading-4 sm:hidden md:leading-normal lg:my-5 ">
                                                {windowWidth >= 1285
                                                    ? data[
                                                          i
                                                      ].description.substring(
                                                          0,
                                                          110
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
                                            <div
                                                onClick={() =>
                                                    router.push(
                                                        `portfolio-app/${i}`
                                                    )
                                                }
                                                className="mt-2 flex h-14 items-center justify-center rounded-3xl bg-white bg-opacity-5 text-sm duration-500 hover:bg-opacity-10 "
                                            >
                                                ver mais
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="projectBoxClass projectsBoxBlur absolute top-0 -z-10 h-full w-full rounded-3xl"></div>
                            </Tilt>
                        </div>
                    );
                }
            })}
        </React.Fragment>
    );
};

export default MainProjects;
