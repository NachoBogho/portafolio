import React from 'react'
import './SideBar.css'


const SideBar = () => {
  return (
    <aside className='side-bar-items'>
        <a href="#home" className="side-bar-button"><i className="bi bi-house-fill"></i></a>
        <a href="#about" className="side-bar-button"><i className="bi bi-person-fill"></i></a>
        <a href="#briefcase" className="side-bar-button"><i className="bi bi-briefcase-fill"></i></a>
        <a href="#contact" className="side-bar-button"><i className="bi bi-chat-fill"></i></a>
    </aside>
  )
}

export default SideBar