'use client';
import Link from 'next/link';

const aboutMe = () => {
    return (
        <>
            <div className="pt-52">
                <h1>Sobre Mim</h1>
                <Link href="/"> Home </Link>
                <Link href="/portfolio-app"> Portfolio </Link>
                <Link href="/skills"> Skills </Link>


            </div>
        </>
    );
};

export default aboutMe;
