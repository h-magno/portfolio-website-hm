"use client";


import Image from 'next/image'
import { Anek_Telugu } from '@next/font/google'
import styles from './page.module.css'

import Navbar from './components/navbar/Navbar'

const anekTelugu = Anek_Telugu({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})


export default function Home() {
  return (
  <>
    <Navbar></Navbar>
    <main>
      aaa
    </main>
  </>
  )
}
