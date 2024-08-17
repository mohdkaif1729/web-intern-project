"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='flex items-center justify-between mt-12 w-[75%] m-auto'>
      <div className='flex items-center gap-2'>
        <Image src="logo.svg" alt="logo" width={40} height={40} />
        <p className='text-3xl'><span className='font-bold text-3xl'>M</span>umai</p>
      </div>
      <div>
        <ul className='flex gap-10'>
          <Link href="#home"><li>Home</li></Link>
          <Link href="#about-me"><li>About Me</li></Link>
          <Link href="#services"><li>Services</li></Link>
          <Link href="#projects"><li>Projects</li></Link>
          <Link href="#testimonials"><li>Testimonials</li></Link>
          <Link href="#contact"><li>Contact</li></Link>
          <Link href="#download-cv"><li><button className='bg-[#FD6F00] text-white py-1 px-3 rounded-sm'>Download CV</button></li></Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar