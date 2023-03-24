import React from 'react'
import './header.css'
import CV from './CV'
import SocialNet from './SocialNet'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hola, Me llamo</h5>
        <h1>Breizon Caiza</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CV/>
        <SocialNet />

        <div className='me'>
          <img className='me_img' src={ME} alt="me" />
        </div>

        <a className='scroll_down' href="#contact">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header