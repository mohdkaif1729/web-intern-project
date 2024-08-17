import React from 'react'

function Section2() {
  return (
    <section className='mt-10 flex justify-between w-[75%] m-auto'>
      <div>
        <img src="https://s3-alpha-sig.figma.com/img/6dea/b4e8/80f48cd1d9fa0014c092574df5520d15?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=URFPwLBHbJluupLq8wuqCg~57ByOUh-xZz5SsKxXm~JI2mYJVNfLf~Z4FNUp-p9vsLH6sDVhDejBpfkInIgnAf1NcRbcVuvaUzzRQVWiOI5draU2a034t97sCCpbORWKTTQRei9EdZHDUOI28D5ud8vPovoZcb2Ax19-AthMHd73SIWQVm95WkJCMHO~Cvxe8LIz1G7aMbvqaHwH2HcDRW~HiRMBgY89YEOOpmnpy35-yFszJkZIAUO9bV-13osDI~KgQRRc4-HcTgfo6jFwhb86GePnLhVVp-kL~vaBXjCICmLTypFoYyzQjTYh4JYW6VRHR4C3H9rHY4mm-Ry-2w__" alt="" width={444} height={223} />
        <div className='w-[50%] h-10 bg-orange-500 opacity-70 relative top-[-374px] left-[105px] '> </div>
      </div>

      <div className='w-[40%] flex flex-col gap-4'>
        <h2 className='text-5xl font-semibold'>About Me</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>

        <label htmlFor="ux" className='font-semibold'>UX</label>
        <input id='ux' type="range" className='accent-orange-600' />

        <label htmlFor="website-design" className='font-semibold'>Website Design</label>
        <input id='website-design' type="range" className='accent-orange-600' />

        <label htmlFor="app-design" className='font-semibold'>App Design</label>
        <input id='app-design' type="range" className='accent-orange-600' />

        <label htmlFor="graphic-design" className='font-semibold'>Graphic Design</label>
        <input id="graphic-design" type="range" className='accent-orange-600' />

      </div>
    </section>
  )
}

export default Section2