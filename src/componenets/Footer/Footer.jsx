import React from 'react'
import Container from '../Layout/Container'
import Logo2 from '../CustomLogo/Logo2'
import gmail from '../../assets/gmail.png'
import x from '../../assets/x.png'
import insta from '../../assets/insta.png'
import linkedin from '../../assets/linkedin.png'
import send from '../../assets/send.png'


const Footer = () => {
  return (
    <div className='pt-[124px] pb-[30px]'>
      <Container>
        <div className='flex justify-between'>
          <div>
          <a href="#"><Logo2></Logo2></a>
          <p className='font-secondary text-[16px] leading-[28px] text-subtext w-[263px] mt-[26px] mb-[24px]  '>Build a modern and creative website with Innovate.</p>
          <div className='flex gap-x-[6px]'>
            <img src={gmail} alt="" />
            <img src={x} alt="" />
            <img src={insta} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
        <div className='flex flex-row gap-x-[83px]'>
          <div>
            <h4 className='font-secondary font-medium text-lg leading-8 text-headtext mb-5  '>Product</h4>
            <ul className='flex flex-col gap-y-3 font-secondary text-[16px] leading-[28px] text-subtext   '>
              <li><a href="#">Landingpages</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Benefits</a></li>
              <li><a href="#">Features</a></li>
            </ul>
          </div>
          <div >
            <h4 className='font-secondary font-medium text-lg leading-8 text-headtext mb-5  '>Company</h4>
            <ul className='flex flex-col gap-y-3 font-secondary text-[16px] leading-[28px] text-subtext   '>
              <li><a href="#">About</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            
            <h4 className='font-secondary font-medium text-lg leading-8 text-headtext mb-5  '>Resources</h4>
          <ul className='flex flex-col gap-y-3 font-secondary text-[16px] leading-[28px] text-subtext   '>
              <li><a href="#">Guides and resources</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Tools</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className='font-secondary font-medium text-lg leading-8 text-headtext mb-5  '>Get Latest Updates</h4>
            <p className='w-[285px] font-secondary text-[16px] leading-[26px] text-subtext  '>Subscribe to our newsletter and get many interesting things every week</p>
            <div className='mt-8 relative'>
              <input className='w-full placeholder:font-secondary placeholder:leading-[1505 placeholder:text-[#A1A2A3] rounded-[5px]  border border-[#D2D2D2] outline-0 py-[14px] px-[18px] ' placeholder='Your Email Address' type="text" name="" id="" />
              <a className='absolute bottom-[8.5px] right-[8.5px]' href="#">
                <img className='w-9 h-9' src={send} alt="" />
              </a>
            </div>
          </div>
        </div>
        </div>
        <div className='mt-[86px] w-full rounded-full h-[1px] shadow-md bg-[#D2D2D2] mb-6 '></div>
        <a className='text-subtext font-secondary text-[14px] leading-5  ' href="#">© 2024 Innovate - All Right Reserved</a>
      </Container>
    </div>
  ) 
}

export default Footer
