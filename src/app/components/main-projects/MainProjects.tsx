'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import './MainProjects.css';
import { Button } from '@mui/material';

const MainProjects = () => {
  useEffect(() => {
    fetch('https://api.github.com/users/henrique-magno-dev/repos', {
      headers: {
        Authorization: `Bearer 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`
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
  const lastProjects =
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
                lastProjects?.forEach((e, i) => {
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
                  lastProjects?.forEach((e, i) => {
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
                  className="projectBoxClass w-full h-96 rounded-3xl text-white  z-10 cursor-pointer p-10  bg-gradient-to-t from-lime-800 to-lime-500"
                >
                  <div className="block  h-1/4 text-center lg:mb-0 md:mb-10">
                    <h1 className="font-bold text-3xl capitalize ">
                      {data[i].name.replace('-hm', '').replace('-', ' ')}
                    </h1>
                  </div>
                  <div className="h-1/3  text-center flex items-center">
                    {data[i].description.substring(0, 100)}...
                  </div>
                  <div className="h-1/3 flex text-white justify-center items-center">
                  <Link
                      href={`${data[i].html_url}`}
                      className="border w-48  flex items-center justify-center mx-4 lg:mt-0 md:mt-10 rounded-xl h-14 p-2 bg-gray-400 hover:bg-gray-500 duration-500 "
                      >
                      Ver Mais
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
