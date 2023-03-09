'use client';
import Link from 'next/link';

const skills = () => {
  return (
    <>
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
