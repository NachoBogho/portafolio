import React from 'react'
import Form from './Form/Form'
import './Contact.css'
import Footer from './Footer/Footer'

const Contact = () => {
  return (
    <section className='display-flex-column-contact contact-height' id='contact'>
      <h2 className='section-size'> CONTACT <span className='span-green'>ME</span></h2>
      <div className='display-flex-row-contact'>
        <div className='display-flex-column-details'>
          <h3>Phone Number</h3>
          <p>+54 9 11 3500-3719</p>
          <div className='display-flex-row'>
            <a href="https://www.linkedin.com/in/ignacio-boghossian-313b11225/" className="side-bar-button" target='_blank'><i class="bi bi-linkedin"></i></a>
            <a href="https://www.instagram.com/nachobogho18/" className="side-bar-button" target='_blank'><i class="bi bi-instagram"></i></a>
            <a href="https://twitter.com/ignacio_bogho" className="side-bar-button" target='_blank'><i class="bi bi-twitter-x"></i></a>
            <a href="https://wa.link/vs2yn7" className="side-bar-button" target='_blank'><i class="bi bi-whatsapp"></i></a>
          </div>
        </div>
        <Form />
      </div>
    <Footer/>

    </section>
  )
}

export default Contact

