'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';

const LastProjects = () => {
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
    document.getElementById('lastProjectSection')?.childNodes;

  return (
    <>
      {data.map((e, i) => {
        if (data[i].homepage != null) {
          counter++;
          return (
            <Link
              className="projectBox"
              id={`lastProjects-${counter}`}
              onMouseOver={() => {
                console.log(data[i].html_url)
                lastProjects?.forEach((e, i) => {
                  let projectGroup = document.getElementById(`lastProjects-${i}`);
                  if (projectGroup != null) {
                    projectGroup.style.transform = 'scale(0.95)';
                    projectGroup.style.transitionDuration = '0.2s';
                  }
                });
              }}
              onMouseOut={() => {
                {
                  lastProjects?.forEach((e, i) => {
                    let projectGroup = document.getElementById(`lastProjects-${i}`);
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
                tiltMaxAngleX={3}
                tiltMaxAngleY={3}
                perspective={1000}
                glareMaxOpacity={0}
              >
                <div className="w-full h-96 rounded-3xl text-white  z-10 cursor-pointer p-10 relative bg-gradient-to-t from-blue-900 to-blue-600">
                  <div className="block  h-1/3 text-center">
                    <h1>{data[i].name}</h1>
                  </div>
                  <div className="block h-1/3 text-center">
                    {data[i].description}
                  </div>
                  <div className="h-1/3 flex text-white justify-center items-center">
                    <Link
                      href={`${data[i].html_url}`}
                      className="border w-48  flex items-center justify-center mx-4 rounded-xl lg:h-14 md:h-16 p-2 bg-gray-400 hover:bg-lime-500 duration-500 "
                    >
                      VER MAIS
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

export default LastProjects;
