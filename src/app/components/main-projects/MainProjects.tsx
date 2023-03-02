'use client';import { useState, useEffect } from 'react';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import './MainProjects.css';
import { Button } from '@mui/material';

const MainProjects = () => {
  useEffect(() => {
    fetch('https://api.github.com/users/henrique-magno-dev/repos', {
      headers: {
        // Authorization: `Bearer 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`
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_GIT}`
      }
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  interface Item {
    name: string;
    stargazers_count: string;
    description: string;
    html_url: string;
    homepage: string;
  }

  const [data, setData] = useState<Array<Item>>([]);
  let counter = -1;
  const mainProjects =
    document.getElementById('mainProjectSection')?.childNodes;

  return (
    <>
      {data.map((e, i) => {
        if (data[i].stargazers_count != '0') {
          counter++;
          return (
            <Link
              className="projectBox"
              id={`main-projects-${counter}`}
              onMouseOver={() => {
                mainProjects?.forEach((e, i) => {
                  let projectGroup = document.getElementById(
                    `main-projects-${i}`
                  );
                  if (projectGroup != null) {
                    projectGroup.style.transform = 'scale(0.95)';
                    projectGroup.style.transitionDuration = '0.2s';
                  }
                });
              }}
              onMouseOut={() => {
                {
                  mainProjects?.forEach((e, i) => {
                    let projectGroup = document.getElementById(
                      `main-projects-${i}`
                    );
                    if (projectGroup != null) {
                      projectGroup.style.transform = 'scale(1)';
                      projectGroup.style.transitionDuration = '0.5s';
                    }
                  });
                }
              }}
              href={`portfolio-app/${i}`}
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
                  className="projectBoxClass motherDiv relative xl-96 lg:h-96 md:h-48 sm:h-32 rounded-3xl cursor-pointer bg-gradient-to-t from-lime-800 to-lime-500"
                >
                  <div className="tituloConteudo h-1/4 text-center 
                  xl:mb-10 xl:pt-10 
                 lg:pt-7
                  md:mb-5 md:pt-10 md:px-10 
                   sm:flex sm:justify-center sm:items-center sm:h-full sm:px-5 
                  ">
                    <h1 className="font-bold capitalize titulo ">
                      {data[i].name.replace('-hm', '').replace('-', ' ')}
                    </h1>
                  </div>
                  <div className="h-1/3 texto text-center px-10 sm:hidden" >
                    <span className='xl:block lg:block md:hidden ' >{data[i].description.substring(0, 100)}...</span>
                  </div>
                  <div className="lg:h-1/4 bottomBtn md:h-1/3 w-full flex sm:hidden absolute bottom-0">
                    <Link
                      href={`${data[i].html_url}`}
                      className="border-b-1  w-full h-full flex items-center justify-center rounded-b-3xl hover:bg-white hover:bg-opacity-10 duration-500 text-sm "
                    >
                      ver mais
                    </Link>
                  </div>
                </div>
              </Tilt>
            </Link>
          );
        }
      })}
    </>
  );
};

export default MainProjects;
