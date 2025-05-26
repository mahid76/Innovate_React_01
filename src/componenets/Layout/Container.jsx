import React from 'react'

const Container = ({children}) => {
  return (
    <div className='md:w-[1409px] w-au mx-auto relative px-5 md:px-0 '>
      {children}
    </div>
  )
}

export default Container
