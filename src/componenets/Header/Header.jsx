import React from 'react'
import header from '../../assets/bannerShape.png'

const Header = ({children}) => {
  return (
    <div className=' bg-center bg-cover bg-no-repeat'
    style={
      {
        backgroundImage: `url(${header})`,
      }
    } >
       {children}
    </div>
  )
}

export default Header
