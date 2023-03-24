import React from 'react'
import './header.css'
import Cv from '../../assets/CV-Breizon Caiza.pdf'

const CV = () => {
  return (
    <div className='cv'>
        <a className='btn' href={Cv} target='_blank' >Download CV</a>
        <a className='btn btn-primary' href="#contact">Let's Talk</a>
    </div>
  )
}

export default CV