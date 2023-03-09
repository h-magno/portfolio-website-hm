'use client';
import './globals.css';
import Fab from '@mui/material/Fab';
import SettingsIcon from '@mui/icons-material/Settings';
import { Anek_Telugu } from '@next/font/google';
import Cursor from './components/cursor/Cursor';
import SmoothScroll from './components/smooth-scroll/SmoothScroll';
import Link from 'next/link';
import Image from 'next/image';
import stars from '../../public/stars.jpg';
import './Navbar.css';
import { useInView } from 'react-intersection-observer';

const anekTelugu = Anek_Telugu({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const { ref: downSizeMenu, inView: downSizeEffect } = useInView({
        threshold: 0
    });
    return (
        <html lang="en" className="bg-black">
            <Cursor />


            <head />
            <div
                style={{
                    backgroundImage: `url('${stars.src}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center bottom'
                }}
                className={`
                    ${
                        downSizeEffect
                            ? ' -top-20'
                            : 'bg-navbar-slide top-0 z-50'
                    }
                
                    fixed h-20 w-full`}
            ></div>
            <div
                className={`${
                    downSizeEffect ? 'h-32' : ' h-20  backdrop-blur-0'
                } navWidth fixed top-0 z-50 block w-full duration-500 sm:hidden `}
            >
                <div className="grid-custom bg-blur z-50 h-full  items-center justify-between font-mono backdrop-blur sm:hidden  md:flex md:px-10 lg:flex lg:px-32 ">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ul className="menu-after">
                            <li className="cursor-pointer py-10 text-base font-semibold">
                                <Link href="/portfolio-app">
                                    <p className="text-lime-400">
                                        .
                                        <span className="text-white">
                                            Portfólio
                                        </span>
                                        ()
                                    </p>
                                </Link>
                            </li>
                            <li className="ml-2 cursor-pointer py-10 text-base font-semibold">
                                <Link href="/skills">
                                    <p className="text-lime-400">
                                        .
                                        <span className="text-white">
                                            Skills
                                        </span>
                                        ()
                                    </p>
                                </Link>
                            </li>
                            <li className="ml-2 cursor-pointer py-10 text-base font-semibold">
                                <Link href="/about-me">
                                    <p className="text-lime-400">
                                        .
                                        <span className="text-white">
                                            Sobremim
                                        </span>
                                        ()
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="md:hidden lg:hidden xl:flex ">
                        <button
                            className={`mx-2  rounded-2xl border-2 border-blue-600 bg-blue-600 bg-opacity-5 font-mono  font-extrabold text-blue-600 duration-500  hover:bg-opacity-10 ${
                                downSizeEffect
                                    ? 'h-12 w-44 text-base'
                                    : 'h-10 w-32 text-sm'
                            } `}
                        >
                            CURRÍCULO PDF
                        </button>
                        <label
                            htmlFor="my-modal-4"
                            className={`btn-navbar2 mx-2 flex cursor-pointer items-center justify-center rounded-2xl border-2 border-lime-400 bg-lime-400 bg-opacity-5 font-mono font-extrabold text-lime-400  duration-500 hover:bg-opacity-10 ${
                                downSizeEffect
                                    ? 'h-12 w-44 text-base'
                                    : 'h-10 w-32 text-sm'
                            } `}
                        >
                            CONTATO
                        </label>
                    </div>
                    <div className="md:flex lg:flex xl:hidden">
                        <button
                            className={`mx-2 h-10 w-32
                  rounded-2xl  border-2 border-blue-600 bg-blue-600 bg-opacity-5 font-mono text-sm  font-extrabold text-blue-600 duration-500  hover:bg-opacity-10`}
                        >
                            CURRÍCULO PDF
                        </button>
                        <label
                            htmlFor="my-modal-4"
                            className={`btn-navbar2 mx-2 flex h-10 w-32 cursor-pointer items-center  justify-center  rounded-2xl border-2 border-lime-400 bg-lime-400 bg-opacity-5 font-mono text-sm font-extrabold text-lime-400  duration-500 hover:bg-opacity-10 `}
                        >
                            CONTATO
                        </label>
                    </div>
                </div>
            </div>

            <Fab className="fixed  bottom-10 right-10 bg-blue-50">
                <SettingsIcon />
            </Fab>
            <SmoothScroll />
            <body className="overflow-x-hidden font-mono text-white ">
            <div
                ref={downSizeMenu}
                className="menuRef absolute top-0 h-1 w-20 "
            ></div>
                {children}
            </body>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label
                    className="modal-box relative bg-black font-mono text-white"
                    htmlFor=""
                >
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <Image
                                    src="/chat-pic.jpg"
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </div>
                        <div className="chat-header text-gray-300">
                            Henrique Magno
                        </div>
                        <div className="chat-bubble">
                            <h3>Envie-me um email. 😃</h3>
                        </div>
                    </div>
                    <form className="pt-10 text-black">
                        <input
                            type="text"
                            placeholder="Nome (opcional)"
                            className="input w-full"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="input mt-3 w-full"
                        />
                        <input
                            type="email"
                            placeholder="Mensagem"
                            className="input mt-3 h-32 w-full"
                        />
                        <div className="mt-3 flex h-20 w-full items-center justify-end">
                            <button className="btn mx-2 w-32 rounded-2xl border-2 border-blue-600 bg-blue-600 bg-opacity-5 font-mono font-extrabold text-blue-600 duration-500  hover:border-blue-600 hover:bg-opacity-10">
                                Button
                            </button>
                        </div>
                    </form>
                </label>
            </label>
        </html>
    );
}
