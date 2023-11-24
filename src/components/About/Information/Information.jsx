import React from 'react'
import DatPerson from '../DatPerson/DatPerson'
import Education from '../Education/Education'
import Skills from '../Skills/Skills'
import './Information.css'


const Information = () => {
  return (
    <section className='display-flex-column-about height-about' id='about'>
      <h2 className='section-size'> ABOUT <span className='span-green'>ME</span> </h2>
      <div className='display-flex-row-about'>
        <Education />
        <div>
        <DatPerson />
        <Skills/>
        </div>
      </div>
    </section>
  )
}

export default Information