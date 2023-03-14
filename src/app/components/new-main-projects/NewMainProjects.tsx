'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import './NewMainProjects.css';
import { Button } from '@mui/material';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useWindowSize } from 'react-use';

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
                        <div
                            key={`main-projects-${i}`}
                            className="w-full rounded-3xl px-32 md:h-[400px] xl:h-[650px]"
                        >
                            <div className="newMainBox h-full rounded-3xl border border-gray-700"></div>
                        </div>
                    );
                }
            })}
        </React.Fragment>
    );
};

export default MainProjects;
