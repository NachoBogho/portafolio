import React from 'react'
import './DatPerson.css'

const DatPerson = () => {
    return (
        <div className='personal-data'>
            <h3> PERSONAL INFORMATION </h3>
            <div className='info-display'>
                <p className='info-field'>Name: </p>
                <p className='info-personal'>Ignacio</p>
                <p className='info-field'>Last Name: </p>
                <p className='info-personal'>Boghossian</p>
                <p className='info-field'>Nationality: </p>
                <p className='info-personal'>Argentinian</p>
                <p className='info-field'>Birthdate: </p>
                <p className='info-personal'>09/03/2002</p>
                <p className='info-field'>Gender: </p>
                <p className='info-personal'>M</p>
                <p className='info-field'>Phone Number: </p>
                <p className='info-personal'>+54 9 11 35003719</p>
                <p className='info-field'>Address: </p>
                <p className='info-personal'>Argentina Buenos Aires Ezeiza</p>
            </div>
            {/* <a href="#" className='green-button'>View More</a> */}
        </div>
    )
}

export default DatPerson