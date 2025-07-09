import React from 'react'
import "./sidebar.css"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className=''
            src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" 
          alt="" 
        />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, beatae. Lorem ipsum dolor sit amet. </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Life Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">News</li>
            <li className="sidebarListItem">Coding</li>
            <li className="sidebarListItem">Cinema</li>
            <li className="sidebarListItem">Tech</li>
          </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
          <div className="sidebarSocial">
            <FaTwitter  className= 'sidebarIcon'/>
            <FaInstagram className='sidebarIcon'/>
            <FaLinkedin className= 'sidebarIcon'/>
            <FaFacebook className= 'sidebarIcon'/>
          </div>
      </div>

    </div>
  )
}

export default Sidebar
