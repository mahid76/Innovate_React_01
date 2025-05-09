import React from 'react'
import Container from '../Layout/Container'
import Pricing3 from '../CustomLogo/Pricing3'
import Pricing1 from '../CustomLogo/Pricing1'
import Pricing2 from '../CustomLogo/Pricing2'
import CheckIcon from '../../assets/CheckIcon.png'


const Pricing = () => {

  const pricingData = [
    {
      img: <Pricing1></Pricing1> ,
      title: 'Personal',
      subTitle: '$10/mth',
      description: 'Annual pricing ',
      desSpan: '(save 20%)',
      features1: 'Calendar View',
      features2: 'Custom Templates',
      features3: 'list view',
      features4: 'board view',
      features5: 'Assignees & Due Dates',

    },
    {
      img: <Pricing2></Pricing2> ,
      title: 'Team',
      subTitle: '$25/mth',
      description: 'Annual pricing ',
      desSpan: '(save 35%)',
      features1: 'Timeline Review',
      features2: 'Custom fields',
      features3: 'Custom Templates',
      features4: 'Task dependencies',
      features5: 'Milestones Manage',


    },
    {
      img: <Pricing3></Pricing3> ,
      title: 'Enterprise',
      subTitle: '$50/mth',
      description: 'Annual pricing ',
      desSpan: '(save 40%)',
      features1: 'Data export & deletion',
      features2: 'Block native integrations',
      features3: 'Custom branding',
      features4: 'Lock custom fields',
      features5: 'Priority support',


    },
  ]



  return (
    <div className='pt-[140px] pb-[160px] '>
      <Container>
        <div className='mb-[77px] text-center'>
          <h3 className='w-[624px] mx-auto font-primary font-bold text-[46px] leading-[58px] text-headtext mb-[39px] '>Pricing Designed To Fit Your Business</h3>
          <h5 className='font-primary font-bold text-2xl leading-[100%] text-primary  '>Monthly</h5>
        </div>
        <div className='flex justify-between'>
          {
            pricingData.map((item)=>(

              <div className='w-[450px] rounded-[20px] bg-white border border-[#DCE7FE] py-10 px-[60px] text-center group hover:bg-primary transition-all  '  >
                <div className='flex justify-center'>{item.img}</div>
                <h4 className=' group-hover:text-[#43E7DF] transition-all font-primary font-bold text-2xl leading-[36px] text-primary  mt-8 mb-[2px]'>{item.title}</h4>
                <h2 className=' group-hover:text-white transition-all font-primary font-bold text-[44px] leading-[54px] tracking-[-2%] text-headtext  '>{item.subTitle}</h2>
                <p className=' group-hover:text-white transition-all mt-[14px] mb-10 font-secondary font-medium text-lg text-[#645e76] leading-[18px] '>{item.description}
                <span className=' group-hover:text-[#43E7DF] transition-all text-primary font-bold'>{item.desSpan}</span>

                </p>

                <ul className='flex mb-10 flex-col gap-[37px] font-secondary font-medium text-lg text-subtext leading-[32px] text-left group-hover:text-white transition-all '>
                  <div className='flex items-center gap-[22px]'>
                    <img src={CheckIcon} alt="" />
                    <li>{item.features1}</li>
                  </div>
                  <div className='flex items-center gap-[22px]'>
                    <img src={CheckIcon} alt="" />
                    <li>{item.features2}</li>
                  </div>
                  <div className='flex items-center gap-[22px]'>
                    <img src={CheckIcon} alt="" />
                    <li>{item.features3}</li>
                  </div>
                  <div className='flex items-center gap-[22px]'>
                    <img src={CheckIcon} alt="" />
                    <li>{item.features4}</li>
                  </div>
                  <div className='flex items-center gap-[22px]'>
                    <img src={CheckIcon} alt="" />
                    <li>{item.features5}</li>
                  </div>
                  
                </ul>
                
                  <a className='group-hover:text-headtext group-hover:bg-[#43E7DF] transition-all py-5 px-[104px] text-white bg-primary text-lg leading-5 font-secondary font-medium rounded-[6px] ' href="#">Purchase Now</a>
                
              </div>
            ))
          }
        </div>

      </Container>
    </div>
  )
}

export default Pricing
