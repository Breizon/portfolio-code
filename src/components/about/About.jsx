import React from 'react'
import './about.css'
import Me from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about' className='section_light'>
      <h5>ven a conocerme</h5>
      <h2>Acerca de mí</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card '>
              <FaAward  className='about_icon'/>
              <h5>Formación</h5>
              <small>Academlo Full Stack Web Development</small>
            </article>

            <article className='about_card '>
              <FiUser  className='about_icon'/>
              <h5>Experiencia</h5>
              <small>1 año de experiencia</small>
            </article>

            <article className='about_card '>
              <VscFolderLibrary  className='about_icon'/>
              <h5>Proyectos</h5>
              <small>8+ Desarrollados</small>
            </article>
          </div>

          <p>
          Profesional responsable y eficiente en busca de un puesto como Desarrollador Web Full Stack. Mi objetivo es obtener experiencia en las diversas área correspondientes al cargo. Cuento con habilidades técnicas de cara al desarrollo, mantenimiento y optimisación de aplicaciones web empleando diversos lenguajes de programación para el área del Front-end(HTML, CSS, JavaScript, React) y para el back-end(Node.js, Express, PostgreSQL).
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About