import React from 'react'
import './Jobs.css'

const Jobs = () => {
  return (
    <div className='display-flex-column-img'>
        <h3 className='h3-projects'>PROJECTS</h3>
        <div className='display-flex-column-projects'>
            <div className='display-flex-row-projects'>
            <a href=""><img src="/public/img/PROJECTS/ether-easel.jpg" alt="ether-easel" /></a>          
            </div>
            <div className='display-flex-row-projects'>
            <img src="/public/img/PROJECTS/balunek.jpg" alt="balunek" />
            </div>
            <div className='display-flex-row-projects'>
            <img src="/public/img/PROJECTS/ether-easel.jpg" alt="sabor-caribe" />
            </div>
            
        </div>
    </div>
  )
}

export default Jobs