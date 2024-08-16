import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='bg-[#F8F8F8] mt-20 flex flex-col gap-10'>
      <div className='flex items-center justify-center gap-2 mt-10'>
        <Image src="logo.svg" alt="logo" width={40} height={40} />
        <p className='text-3xl'><span className='font-bold text-3xl'>M</span>umai</p>
      </div>
      <div>
        <ul className='flex gap-10 justify-center'>
          <Link href="#home"><li>Home</li></Link>
          <Link href="#about-me"><li>About Me</li></Link>
          <Link href="#services"><li>Services</li></Link>
          <Link href="#projects"><li>Projects</li></Link>
          <Link href="#testimonials"><li>Testimonials</li></Link>
          <Link href="#contact"><li>Contact</li></Link>
        </ul>
      </div>
      <div className='flex gap-3 justify-center mb-10'>
        <img src="/facebook.svg" alt="" className='w-7' />
        <img src="/twitter.svg" alt="" className='w-7' />
        <img src="/instagram.svg" alt="" className='w-7' />
        <img src="/linkedin.svg" alt="" className='w-7' />
      </div>
      <p className='bg-[#545454] text-center py-3 text-white'>&copy; 2023 <span className='text-[#FD6F00]'>Mumair</span> All Rights Reserved, inc.</p>
    </footer>
  )
}

export default Footer