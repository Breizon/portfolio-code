import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import './header.css'

const SocialNet = () => {
  return (
    <div className='socialnet'>
        <a href="https://www.linkedin.com/in/breizon-caiza-naranjo-19a136256/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Breizon" target='_blank'><FaGithub/></a>
        <a href="https://www.facebook.com/esteban.caiza.568" target='_blank'><FaFacebookF/></a>
    </div>
  )
}

export default SocialNet