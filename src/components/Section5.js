import React from 'react'

function Section5() {
  return (
    <section className='mt-10'>
      <div className='w-[70%] m-auto flex flex-col gap-6 items-center mt-20'>
        <h1 className='font-semibold text-5xl'>Testimonials</h1>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
      </div>
      <div className='mt-10 flex justify-between'>
        {/* <div></div> */}
        <div className='w-[45rem] flex justify-center items-center gap-6 bg-[#F8F8F8] px-4 py-7 rounded-md'>
          <img src="https://s3-alpha-sig.figma.com/img/ac6c/6fee/baa649092172e33f9b1e0e4eb8df495d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dXZZ53vmGB-MU83LfG8sisQg3200USCDDM9hEPhvUWP5on1iY040sNILVeBDhfiL8fQZX926KeaKgaTVlGXMP59QFm5eO2CMy9EBUaZritbRUGma-QeTQNFCPCcakEapa17JDY7hKmkDHpGknR6nV2Kh2W5ueTs96RPIrpCjFuC2c5~fD1C46Agc-YLchrLSj3DqtXw-hCcNhxy0U0YgvtrGpBQQNsaKaCCBywYeDIcN~Y1h2oEUOey6JOGAJTgAqSfTKw7in8XDK~vFd-Hm7qjgyB1y4LHbtxituuxMQuOPm7r4Y5zamlH~fvEXFnPEJHUhL9yIAdNIOZXBrkwYiw__" alt="" height={120} width={120} className='rounded-[100%]' />
          <div>
            <p><span className='text-[#FD6F00] text-2xl font-bold'>"</span>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.<span className='text-[#FD6F00] text-2xl font-bold'>"</span></p>
            <p className='font-semibold text-xl'>Name</p>
            <p>CEO</p>
          </div>
        </div>
        {/* <div></div> */}
      </div>
    </section>
  )
}

export default Section5