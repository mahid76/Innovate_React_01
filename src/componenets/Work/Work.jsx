import React from 'react'
import Container from '../Layout/Container'
import Work1 from '../CustomLogo/Work1'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import Work2 from '../CustomLogo/Work2'
import Work3 from '../CustomLogo/Work3'
import Work4 from '../CustomLogo/Work4'




const Work = () => {
  const workData = [
    {
      img: <Work1></Work1> ,
      title:"Plan Product Roadmap",
      description:"A product roadmap is a shared source of truth that outlines the vision, direction, priorities"
    },
    {
      img: <Work2></Work2> ,
      title:"Assign Any Work",
      description:"Work assignment or job assignment is allocating work to work centers or appropriate "
    },
    {
      img: <Work3></Work3> ,
      title:"Monitor Work Progress",
      description:"Monitor Work ProgressKeeping records and monitoring activities helps people see progress "
    },
    {
      img: <Work4></Work4> ,
      title:"Pertect Intergration",
      description:"App integration, in a general sense, is the process of resources or capabilities from one application  "
    },
  ]



  return (
    <section className='py-[140px]'>
      <Container>
        <div className='text-center'>
          <h4 className='font-secondary text-[20px] font-medium text-[#FF7364]'>Our Services</h4>
          <h2 className='font-primary font-bold text-[46px] leading-[58px] text-headtext '>How It Works</h2>
        </div>
        <div className='flex justify-between my-20'>
          {
          workData.map((item)=> (
            <div className='p-9 rounded-[20px] border  border-[#DCE7FE] group hover:bg-primary transition-all' >
              
              {item.img}
              
              <h4 className='group-hover:text-white transition-all font-primary font-bold text-[22px] leading-[34px] text-headtext mt-[26px] mb-2  '>{item.title}</h4>
              <p className='group-hover:text-white transition-all font-secondary text-[16px] leading-[26px] w-[258px] tracking-[-0.25%] text-subtext mb-[26px] '>{item.description}</p>
              <div className='flex items-center gap-[6.5px] cursor-pointer'>
              <p className='group-hover:text-white transition-all font-secondary font-medium text-[16px] leading-[26px] text-primary ' >Read More 
                
                </p>
                <FontAwesomeIcon className='text-primary group-hover:text-white transition-all text-[15px] ' icon={faArrowRightLong}  ></FontAwesomeIcon>
              </div>

            </div>
          ))}
        </div>
        <div className='text-center'><a className='hover:bg-primary hover:text-white  duration-300 border border-primary rounded-[6px]  font-secondary py-5 px-12 font-medium text-lg leading-5 text-primary' href="#">View More</a></div>



        
        
      </Container>


    </section>
  )
}

export default Work

