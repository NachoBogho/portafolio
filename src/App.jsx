import { useState } from 'react'
import Index from './components/Home/Index/Index'
import Information from './components/About/Information/Information'
import './App.css'
import './reset.css'
import Briefcase from './components/Briefcase/Briefcase'
import Contact from './components/Contact/Contact'

function App() {


  return (
    <div className='page-body'>
      <Index/>  
      <Information/> 
      <Briefcase/>
      <Contact/>
    </div>
  )
}

export default App
