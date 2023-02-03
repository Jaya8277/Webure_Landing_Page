import React from 'react'

const Navbar = () => {

  return (
    <div className='shadow-md ... p-5 animate__animated animate__backInDown'>
      <div className='max-w-[1240px] items-center flex justify-between  mx-auto'>
      <div className='text-3xl font-bold text-[#FB3F6C] italic'>
        Webure Technologies
        </div>
        <div className='flex text-black  gap-10 text-2xl'>
        <div>
            About Us 
        </div>
        <div>Sevices</div>

        <div>Careers</div>
        <div>ROI Stories</div>
        <div>Blog</div>
        <div>Contact Us</div>
        <div className="rounded-full ... ... ring border-[#243c5a] ring-offset-4">
            <button>Let's Talk</button>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Navbar