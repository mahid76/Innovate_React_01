import React from 'react'
import Container from '../Layout/Container'

const Customer = () => {

  const customerData = [
    {
      count:'720+',
      description:'Over 500 business powered with us',
    },
    {
      count:'4.9',
      description:'Rating on google play and app store',
    },
    {
      count:'200+',
      description:'Easily integrate with your favorite apps',
    },
  ]

  return (
    
    <div className='py-[85px] px- '>

     <Container>
     <div className='flex justify-end px-[70px]'>
     <div className='flex flex-col gap-y-[64px] w-[608px] '  >
     <h3 className='w-[554px]  font-primary text-[44px] font-bold text-white  '>Trusted by 35,000+ happy customers.</h3>
      <div className='flex flex-row gap-x-10'>
        
      {
        customerData.map((item)=>
        (
          <div className='flex flex-col gap-y-[12px]'>
            <h3 className='font-primary font-black text-[44px] leading-[54px] text-white  '>{item.count}</h3>
            <p className= 'font-secondary text-lg leading-8 text-white font-medium w-[176px]  '>{item.description}</p>
          </div>
        ))
      }
      </div>
     </div>
     </div>
     </Container>

      
    </div>
  )
}

export default Customer
