'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import './NewMainProjects.css';
import { Button } from '@mui/material';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useWindowSize } from 'react-use';
import portfolioAppPrint from '../../../../public/portfolioAppPrint.png';
import Image from 'next/image';

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
                console.log(data[i].homepage);
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
                                className="newMainBox flex w-full rounded-3xl border border-gray-800  sm:h-auto sm:flex-col  md:flex-col lg:h-[500px] m-auto lg:flex-row"
                            >
                                <div className=" box-border sm:h-1/2 sm:w-full sm:px-10 sm:py-2 md:h-1/2 md:w-full md:py-2 md:px-10 lg:flex lg:h-full lg:w-1/2 lg:items-center lg:justify-center">
                                    <div className="md: rounded-3xl border border-gray-800 bg-gray-500 sm:m-auto sm:aspect-video sm:h-full sm:w-full md:m-auto  md:aspect-video md:h-full lg:aspect-square lg:h-[90%]">
                                        <div
                                            onClick={() =>
                                                router.push(`/skills`)
                                            }
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
                                                className="porjectBoxAnimation absolute top-0 flex items-center justify-center"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className=" sm:h-1/2 sm:w-full md:h-1/2 md:w-full lg:flex lg:h-full lg:w-1/2  lg:items-center lg:justify-center lg:pr-10">
                                    <div className=" sm:h-full sm:px-10 md:h-full md:px-10 lg:h-[90%] lg:w-full">
                                        <h2 className="flex h-1/5 items-center justify-center text-4xl font-black capitalize sm:my-5 md:my-5 ">
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
                                        <div className="flex h-2/5 justify-center lg:my-0 sm:my-10 sm:items-center md:my-10 md:items-center lg:items-start">
                                            {data[i].description.slice(
                                                0,
                                                projectImgUrlIndex(i)
                                            )}
                                        </div>
                                        <div className=" flex h-1/5 items-center justify-center lg:my-0 lg:pb-10 sm:my-5 md:my-5 ">
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
                                                Live Demo
                                            </Link>
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
