import React from 'react'
import './skill.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='skill'>
      <h5>Que habilidades presento</h5>
      <h2>Mis habilidades</h2>

      <div className="container skill_container">
        <div className="skills_frontend">
          <h3>Frontend Development</h3>
          <div className="skill_content">
            <article className='skill_details'>
              <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experimentado</small>
              </div>
            </article>
            <article className='skill_details'>
              <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experimentado</small>
              </div>
            </article>
            <article className='skill_details'>
              <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experimentado</small>
              </div>
            </article>
            <article className='skill_details'>
              <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experimentado</small>
              </div>
            </article>
            {/* <article className='skill_details'>
              <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experimentado</small>
              </div>
            </article> */}
            <article className='skill_details'>
              <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experimentado</small>
              </div>
            </article>
          </div>
        </div>
        {/*End of frontend */}
        {/*Start of Backend */}
        <div className="skills_backend">
        <h3>Backend Development</h3>
          <div className="skill_content">
            <article className='skill_details'>
              <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experimentado</small>
              </div>
            </article>
            {/* <article className='skill_details'>
              <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experimentado</small>
              </div>
            </article> */}
            {/* <article className='skill_details'>
              <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Proximamente</small>
              </div>
            </article> */}
            <article className='skill_details'>
              <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>PostgreSQL</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='skill_details'>
              <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            {/* <article className='skill_details'>
              <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>Next JS</h4>
                <small className='text-light'>Experimentado</small>
              </div>
            </article> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills