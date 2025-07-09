import React from 'react'
import "./topbar.css"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";


function Topbar() {
  return (
    <div className='top'>
        <div className="topLeft">
          <FaInstagram className='topIcon'/>
          <FaTwitter  className='topIcon'/>
          <FaLinkedin className='topIcon'/>
          <FaFacebook className='topIcon'/>
        </div>
        <div className="topCenter">
          <ul>
            <li className='topListItem'>HOME</li>
            <li className='topListItem'>ABOUT</li>
            <li className='topListItem'>WRITE</li>
            <li className='topListItem'>CONTACT US</li>
            <li className='topListItem'>LOG OUT</li>
          </ul>
        </div>
        <div className="topRight">
          <img className='topProfilePic'
            src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" 
            alt=""
          />
          <CiSearch className='topSearchIcon'/>
          
        </div>
    </div>
  )
}

export default Topbar
