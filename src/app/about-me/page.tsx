'use client'
import Link from 'next/link';
import Navbar from '../components/navbar/Navbar';

const aboutMe = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>Sobre Mim</h1>
        <Link href="/"> Home </Link>
        <Link href="/portfolio-app"> Portfolio </Link>
        <Link href="/skills"> Skills </Link>
      </div>
    </>
  );
};

export default aboutMe