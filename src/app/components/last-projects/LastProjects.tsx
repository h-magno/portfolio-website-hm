'use client';import { useState, useEffect, useRef, createRef } from 'react';
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
    <>
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
                    projectGroup.style.transform = 'scale(0.95)';
                    projectGroup.style.transitionDuration = '0.2s';
                  }
                });
              }}
              onMouseOut={() => {
                {
                  lastProjects?.forEach((e, i) => {
                    let projectGroup = document.getElementById(
                      `last-projects-${i}`
                    );
                    if (projectGroup != null) {
                      projectGroup.style.transform = 'scale(1)';
                      projectGroup.style.transitionDuration = '0.5s';
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
                  className={`projectBoxClass relative xl-96 lg:h-96 md:h-48 sm:h-32 rounded-3xl text-white cursor-pointer bg-gradient-to-t from-blue-800 to-blue-500`}
                >
                  <div
                    className="tituloConteudo h-1/4 text-center 
                    xl:mb-10 xl:pt-10 
                    lg:pt-7
                    md:mb-5 md:pt-10 md:px-10 
                    sm:flex sm:justify-center sm:items-center sm:h-2/3 sm:px-5 
                  "
                  >
                    <h1 className="font-bold capitalize titulo ">
                      {data[i].name.replace('-hm', '').replace('-', ' ')}
                    </h1>
                  </div>
                  <div className="h-1/3 texto text-center px-10 sm:hidden">
                    <span className="xl:block lg:block md:hidden font-medium ">
                      {data[i].description.substring(0, 100)}
                    </span>
                  </div>

                  <div className=" lg:h-1/4 md:h-1/3 sm:h-1/3 rounded-b-3xl w-full  absolute bottom-0 ">
                    <div className="relative h-full flex ">
                      <Link
                        href={`${data[i].html_url}`}
                        className="border-b-1 w-1/2 h-full flex items-center justify-center rounded-bl-3xl duration-500 text-sm bg-lime-500 bg-opacity-50 hover:bg-opacity-70 "
                      >
                        git
                      </Link>
                      <Link
                        href={`${data[i].html_url}`}
                        className="border-b-1 w-1/2 h-full flex items-center justify-center rounded-br-3xl duration-500 text-sm bg-purple-500 bg-opacity-30 hover:bg-opacity-70 absolute right-0 "
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
    </>
  );
};

export default LastProjects;
