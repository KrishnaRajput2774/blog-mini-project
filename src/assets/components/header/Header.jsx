import React from 'react'
import "./header.css"
import headerImg from"../../../assets/images/headerimg.png"

function Header() {
  return (
    <div className='header'>
        <div className="headerTilte">
            <span className='headerTitleLg'>Blog</span>
        </div>

        <img className='headerImg' src={headerImg} alt="" />

      
    </div>
  )
}

export default Header
