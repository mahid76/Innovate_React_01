import React from 'react'
import Container from '../Layout/Container'
import laptop from '../../assets/bannerLaptop.png'

const Bannner = () => {
  return (
    <div className=' text-center py-[98px] pb-[558.85px] relative '>
      <Container>
        <h1 className='w-[796px] pb-5 mx-auto font-bold text-white font-primary text-[56px] leading-16'>Get your work done with Management Tool</h1>
        <p className='w-[467px] mx-auto pb-8 font-secondary text-lg text-white leading-8 tracking-[-0.25%] '>The world's first project management platform that connects everything</p>
        <div className='relative'>
          <input className=' w-[480px] bg-white py-5 px-6 outline-0 rounded-[6px] placeholder: text-[#4f4f51]' type="text"placeholder='Your business email'/>
          <a className='bg-secondary text-headtext py-[15px] px-[28.5px] rounded-[6px] font-secondary font-medium text-lg absolute right-[473px] top-[3px] ' href="#">Try for free</a>
        </div>
      </Container>
        <div className='absolute -bottom-[176.15px] left-1/2 -translate-x-1/2 w-[1200px] '>
          <img className=' ' src={laptop} alt="" />
        </div>
    </div>
  )
}

export default Bannner
