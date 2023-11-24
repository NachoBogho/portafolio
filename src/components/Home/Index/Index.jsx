import React from 'react'
import './Index.css'
import InfoIndex from '../InfoIndex/InfoIndex'
import SideBar  from '../SideBar/SideBar'

const Index = () => {
    return (
        <div className='display-index' id='home'>
            <InfoIndex />
            <SideBar />
        </div>
    )
}

export default Index