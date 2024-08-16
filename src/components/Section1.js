"use client"
import React from 'react'

function Section1() {
  return (
    <section className='mt-[100px]'>
      <div className='flex justify-between '>
        <div className='flex flex-col gap-4 w-[40%]'>
          <p className='font-bold'>Hi I am</p>
          <p className='font-semibold text-[#FD6F00] text-xl'>Muhammad Umair</p>
          <div>
            <p className='font-extrabold text-7xl text-black'>UI & UX</p>
            <p className='font-extrabold text-7xl text-black text-end'>Designer</p>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
            Hire Me</p>
          <span><button className='bg-[#FD6F00] text-white py-1 px-5 rounded-sm'>Hire Me</button></span>
        </div>

        <div>
          {/* <div className=' bg-black rounded-full h-60 relative'>
          </div> */}
          <img src="https://s3-alpha-sig.figma.com/img/8aeb/1fc9/979b379ab7f66745a5c557015bf995d5?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p7qnOOi7RvdBltV-bRZXFEf6epZoJy1pfpt5gM014F0-kpaMk4cGmKWVcZifKwBppE5EaS8XJ2AGxlwUlxUsbtL3v3w6MTRYghyThMp2Mi0DmDlZL3sM5eOIV~5vwCccy95Racy0K7t~TGse2bAp6RfB3BnWcB-hiBHktjozoqsn7gLlnQHIExdfwKtGjGDTnAyfeA45r2Gu--vBxllz4RohlqVZIL9YJbjzzd-etUxfB6kliMSqgVv827rN4psfe8i2XRKIozWP4Rd6a-e8juOH8now4DoiM-wrQoDw9qRz5eoY9IN~8Vn5pOdAbzXg-9BsLWgRPKeEhKzK4g0N0w__" width={345} height={233} className='' />

          <div className='w-[50%] h-10 bg-orange-500 opacity-70 relative top-[-340px] left-[85px] '> </div>
        </div>
      </div>

      <div className='flex gap-3 justify-end'>
        <img src="/facebook.svg" alt="" className='w-7' />
        <img src="/twitter.svg" alt="" className='w-7' />
        <img src="/instagram.svg" alt="" className='w-7' />
        <img src="/linkedin.svg" alt="" className='w-7' />
      </div>
    </section>
  )
}

export default Section1
