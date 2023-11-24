import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className='display-flex-column'>
        <h3 className='h3-skills'>SKILLS</h3>
        <div className='display-flex-column'>
            <div className='display-flex-row'>
            <img src="./img/skills/html.png" alt="" />
            <img src="./img/skills/css.png" alt="" />
            <img src="./img/skills/js.png" alt="" />
            </div>
            <div className='display-flex-row'>
            <img src="./img/skills/react.png" alt="" />
            <img src="./img/skills/mongo.png" alt="" />
            <img src="./img/skills/sass.png" alt="" />
            </div>
            <div className='display-flex-row'>
            <img src="./img/skills/boostrap.png" alt="" />
            <img src="./img/skills/git.png" alt="" />
            <img src="./img/skills/ps.png" alt="" />
            </div>
            
        </div>
    </div>
  )
}

export default Skills