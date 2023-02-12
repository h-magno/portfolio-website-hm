'use client';
import Link from 'next/link';
import Navbar from '../components/navbar/Navbar';

const skills = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>Skills</h1>
        <Link href="/"> Home </Link>
        <Link href="/portfolio-app"> Portfolio </Link>
        <Link href="/skills"> Skills </Link>
      </div>
    </>
  );
};

export default skills;
