import React from 'react'
import './InfoIndex.css'

const InfoIndex = () => {
  return (
    <section className='info-index-container'>
      <div className='index-img'>
        <img src="./img/ignacio boghossian.jpg" alt="Logo" />
      </div>
      <div className='info-index'>
        <h4>¡ Hey !</h4>
        <h1>IM <span className='span-green'>IGNACIO BOGHOSSIAN</span></h1>
        <h2>FullStack Web Developer</h2>
        <p>Passionate about technology and agile methodologies in the world of development. I am constantly learning to enhance my ability to solve problems, both personally and professionally.</p>
        <div className='display-flex-row'>
          <a href="./cv/cv Ignacio Boghossian .pdf" download="cv Ignacio Boghossian" className='button-resume'>Download CV</a>
          <a href="https://github.com/NachoBogho" target='_blank' className="side-bar-button"><i class="bi bi-github"></i></a>
        </div>

      </div>

    </section>
  )
}

export default InfoIndex
