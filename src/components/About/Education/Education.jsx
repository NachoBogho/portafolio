import React from 'react'
import './Education.css'

const Experiencie = () => {
    return (
        <div className='display-flex-column-exp'>
            <h2>EDUCATION</h2>

            <div className='display-flex-row-exp'>
                <a href="" className="side-bar-button"><i class="bi bi-mortarboard-fill"></i></a>
                <div className='display-flex-column-data'>
                    <p className='date-color'>AUG 2023 - FEB 2024</p>
                    <h3> BACKEND PROGRAMMING COURSE - CODERHOUSE </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, dolore non, sit enim illo ullam aperiam ex odio earum iste distinctio natus consequatur dolorem fuga ducimus aspernatur! Id, repudiandae odio!</p>
                    <a href="#" target='_blanck' className='green-button'>Course Certificate</a>
                </div>
            </div>
            <div className='display-flex-row-exp'>
                <a href="" className="side-bar-button"><i className="bi bi-mortarboard-fill"></i></a>
                <div className='display-flex-column-data'>
                    <p className='date-color'>FEB 2023 - AUG 2023</p>
                    <h3> FRONTEND PROGRAMMING COURSE - CODERHOUSE </h3>
                    <p>- HTML and CSS.
                        Use of flexbox and grid. And libraries like Boostrap with Sass. Creation of
                        local/remote repositories with git and Github. <br /><br />
                        - Fundamental Skills for Building Sites
                        interactive and dynamic web. Advanced concepts in functions, objects and
                        DOM manipulation.
                        LocalStorage. JSON files. Asynchrony and use of promises and fetch API. <br /><br />
                        - Building interactive user interfaces. Creating components
                        functional and class. State and data management (Props). JSX structure
                        components. Using Hooks, useState and useEffect. Global state management and
                        integration of backend services.</p>
                    <a href="https://www.coderhouse.com/certificados/64f7bef66ac60f2121c33f2f?lang=en" className='green-button' target='_blank'>Course Certificate</a>
                </div>
            </div>
            <div className='display-flex-row-exp'>
                <a href="" className="side-bar-button"><i class="bi bi-mortarboard-fill"></i></a>
                <div className='display-flex-column-data'>
                    <p className='date-color'>SEP 2022 - DIC 2022</p>
                    <h3> PROGRAMMING FUNDAMENTALS -  UTN FRBA </h3>
                    <p>- Distance modality course. Training in programming logic bases,
                        initial concepts and the IT world. Computational logic theory, algorithms
                        and pseudocode. Data structure and object-oriented programming.</p>
                    <a href="../../../../public/img/certificate/Certificado UTN.pdf" target='_blanck' className='green-button'>Course Certificate</a>
                </div>
            </div>
            <div className='display-flex-row-exp'>
                <a href="" className="side-bar-button"><i class="bi bi-mortarboard-fill"></i></a>
                <div className='display-flex-column-data'>
                    <p className='date-color'>2015 - 2020</p>
                    <h3> ING GUIDICCI TECHNOLOGICAL SCHOOL </h3>
                    <p> - Compulsory Secondary Education, Bachelor Oriented in Industrial Technology <br /> <br /> - Pre-university Technological School with an agreement with the National University of Lomas de Zamora.</p>
                    <a href="#" target='_blanck' className='green-button'>Course Certificate</a>
                </div>
            </div>





        </div>
    )
}

export default Experiencie