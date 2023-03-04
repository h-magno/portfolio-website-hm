'use client';
import './globals.css';
import Fab from '@mui/material/Fab';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button, Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import './Navbar.css';
import Link from 'next/link';

import { Anek_Telugu } from '@next/font/google';
import { useInView } from 'react-intersection-observer';
import Cursor from './components/cursor/Cursor';


const anekTelugu = Anek_Telugu({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

const navbarStyle = {
  container: {
    width: '100%',
    height: '120px',
    position: 'fixed',
    top: '0',
    zIndex: '99',
    color: 'black',
    backdropFilter: 'blur(6px)',
    boxShadow: '1px 1px 9px 2px #0000003d'
  },
  navMenuLiStyle: {
    fontSize: '16px',
    margin: '0px 10px',
    fontWeight: '400',
    cursor: 'pointer'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const { ref: downSizeMenu, inView: downSizeEffect } = useInView({
    threshold: 0
  });

  return (
    <html lang="en">
      <head />
      <Cursor/>

      <div
        className={`${
          downSizeEffect ? 'h-32' : ' h-20 bg-black'
        } navWidth duration-500 w-full fixed top-0 z-50 block sm:hidden `}
      >
        <div className="grid-custom h-full lg:px-32 md:px-10  justify-between items-center bg-blur z-50 lg:flex  md:flex sm:hidden font-mono backdrop-blur ">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ul className="menu-after">
              <li style={navbarStyle.navMenuLiStyle}>
                <Link href="/portfolio-app">
                  <p className="text-lime-400">
                    .<span className="text-white">Portfólio</span>()
                  </p>
                </Link>
              </li>
              <li style={navbarStyle.navMenuLiStyle}>
                <Link href="/skills">
                  <p className="text-lime-400">
                    .<span className="text-white">Skills</span>()
                  </p>
                </Link>
              </li>
              <li style={navbarStyle.navMenuLiStyle}>
                <Link href="/about-me">
                  <p className="text-lime-400">
                    .<span className="text-white">Sobremim</span>()
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="xl:flex lg:hidden md:hidden ">
            <button
              className={`${
                downSizeEffect ? 'w-44 h-12 text-base' : 'w-32 h-10 text-sm' 
              } duration-500  bg-blue-600 bg-opacity-5 text-blue-600 rounded-2xl border-2 border-blue-600  mx-2 hover:bg-opacity-10 font-mono  font-extrabold`}
            >
              CURRÍCULO PDF
            </button>
            <button
              className={`${
                downSizeEffect ? 'w-44 h-12 text-base' : 'w-32 h-10 text-sm'
              } duration-500  bg-lime-400 bg-opacity-5 text-lime-400 rounded-2xl border-2 border-lime-400 mx-2 hover:bg-opacity-10 font-mono  font-extrabold btn-navbar2`}
            >
              CONTATO
            </button>
          </div>
          <div className="xl:hidden lg:flex md:flex">
            <button
              className={`w-32 h-10 text-sm 
              duration-500  bg-blue-600 bg-opacity-5 text-blue-600 rounded-2xl border-2 border-blue-600  mx-2 hover:bg-opacity-10 font-mono  font-extrabold`}
            >
              CURRÍCULO PDF
            </button>
            <button
              className={`w-32 h-10 text-sm  duration-500  bg-lime-400 bg-opacity-5 text-lime-400 rounded-2xl border-2 border-lime-400 mx-2 hover:bg-opacity-10 font-mono  font-extrabold btn-navbar2`}
            >
              CONTATO
            </button>
          </div>
        </div>
      </div>

      <Fab className="bg-blue-50  fixed bottom-10 right-10">
        <SettingsIcon />
      </Fab>
      <body className="bg-black text-white font-mono overflow-x-hidden ">
        <div ref={downSizeMenu} className="menuRef block w-20 h-1 "></div>
        {children}
      </body>
    </html>
  );
}
