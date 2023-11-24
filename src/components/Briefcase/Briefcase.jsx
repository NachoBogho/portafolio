import React from 'react'
import Experiencie from './Experiencie/Experiencie'
import Jobs from './Jobs/Jobs'
import './Briefcase.css'

const Briefcase = () => {
  return (
    <section className='display-flex-column-about height-briefcase' id='briefcase'>
    <h2 className='section-size'><span className='span-green'>BRIEF</span>CASE</h2>
    <div className='display-flex-row-briefcase'>
      <Experiencie />
      <div>
        <Jobs/>
      </div>
    </div>
  </section>
  )
}

export default Briefcase