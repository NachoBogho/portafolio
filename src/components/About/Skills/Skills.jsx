import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className='display-flex-column'>
        <h3 className='h3-skills'>SKILLS</h3>
        <div className='display-flex-column'>
            <div className='display-flex-row'>
            <img src="html.png" alt="" />
            <img src="css.png" alt="" />
            <img src="js.png" alt="" />
            </div>
            <div className='display-flex-row'>
            <img src="react.png" alt="" />
            <img src="mongo.png" alt="" />
            <img src="sass.png" alt="" />
            </div>
            <div className='display-flex-row'>
            <img src="boostrap.png" alt="" />
            <img src="git.png" alt="" />
            <img src="ps.png" alt="" />
            </div>
            
        </div>
    </div>
  )
}

export default Skills