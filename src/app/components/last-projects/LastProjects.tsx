'use client';
import React, { useState, useEffect, useRef, createRef } from 'react';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import './LastProjects.css';
import { useRouter } from 'next/navigation';

const LastProjects = () => {
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
    const lastProjects =
        document.getElementById('lastProjectSection')?.childNodes;

    return (
        <React.Fragment>
            {data.map((e, i) => {
                if (data[i].stargazers_count == '0') {
                    counter++;
                    return (
                        <div
                            key={`lastm-${i}`}
                            className="projectBox"
                            id={`last-projects-${counter}`}
                            onMouseOver={() => {
                                lastProjects?.forEach((e, i) => {
                                    let projectGroup = document.getElementById(
                                        `last-projects-${i}`
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
                                    lastProjects?.forEach((e, i) => {
                                        let projectGroup =
                                            document.getElementById(
                                                `last-projects-${i}`
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
                                glareColor={'#001fff'}
                                glareReverse={true}
                                glareBorderRadius={'1.5rem'}
                            >
                                <div                                 
                                    id={`lastProjectBoxId-${counter}`}
                                    className={`projectBoxClass motherDiv xl-96 relative cursor-pointer rounded-3xl bg-gradient-to-t from-blue-800 to-blue-500 text-white sm:h-32 md:h-48 lg:h-96`}
                                >
                                    <div
                                        className="tituloConteudo h-1/4 text-center 
                                                   sm:flex sm:h-2/3 
                                                   sm:items-center
                                                   sm:justify-center sm:px-5 md:mb-5 
                                                   md:px-10 md:pt-10 lg:pt-7 xl:mb-10 xl:pt-10 
                                                 "
                                    >
                                        <h1 className="titulo font-bold capitalize ">
                                            {data[i].name
                                                .replace('-hm', '')
                                                .replace('-', ' ')}
                                        </h1>
                                    </div>
                                    <div className="texto h-1/3 px-10 text-center sm:hidden">
                                        <span className="font-medium md:hidden lg:block xl:block ">
                                            {data[i].description.substring(
                                                0,
                                                100
                                            )}
                                        </span>
                                    </div>

                                    <div className=" absolute bottom-0 w-full rounded-b-3xl sm:h-1/3  md:h-1/3 lg:h-1/4 ">
                                        <div className="relative flex h-full ">
                                            <Link
                                                href={`${data[i].html_url}`}
                                                className="border-b-1 flex h-full w-1/2 items-center justify-center rounded-bl-3xl bg-lime-500 bg-opacity-50 text-sm duration-500 hover:bg-opacity-70 "
                                            >
                                                git
                                            </Link>
                                            <Link
                                                href={`${data[i].html_url}`}
                                                className="border-b-1 absolute right-0 flex h-full w-1/2 items-center justify-center rounded-br-3xl bg-purple-500 bg-opacity-30 text-sm duration-500 hover:bg-opacity-70 "
                                            >
                                                website
                                            </Link>
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

export default LastProjects;
