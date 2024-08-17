import React from 'react'

function Section3() {
  return (
    <section className='flex flex-col gap-5 items-center justify-center w-[75%] m-auto'>
      <div className='w-[70%] m-auto flex flex-col gap-6 items-center mt-20'>
        <h1 className='font-semibold text-5xl'>Services</h1>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
      </div>
      <div className='w-[100%] flex justify-around'>
        <div className='w-[210px] bg-[#F8F8F8] px-4 py-8 flex flex-col gap-3 rounded-md'>
          <img src="/webdesign.svg" alt="" width={50} height={30} />
          <h3 className='font-semibold text-2xl'>UI/UX</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
        </div>
        <div className='w-[210px] bg-[#F8F8F8] px-4 py-8 flex flex-col gap-3 rounded-md'>
          <img src="/webdesign.svg" alt="" width={50} height={30} />
          <h3 className='font-semibold text-2xl'>Web Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
        </div>
        <div className='w-[210px] bg-[#F8F8F8] px-4 py-8 flex flex-col gap-3 rounded-md'>
          <img src="/graphicdesign.svg" alt="" width={50} height={30} />
          <h3 className='font-semibold text-2xl'>App Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
        </div>
        <div className='w-[210px] bg-[#F8F8F8] px-4 py-8 flex flex-col gap-3 rounded-md'>
          <img src="/graphicdesign.svg" alt="" width={50} height={30} />
          <h3 className='font-semibold text-2xl'>Graphic Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
        </div>
      </div>
    </section>
  )
}

export default Section3