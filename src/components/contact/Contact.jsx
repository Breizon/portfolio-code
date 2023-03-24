import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pcl1afc', 'template_ws632ec', form.current, 'uf0ABp-VGzhQ71v5a')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Ponte en contacto</h5>
      <h2>Contáctame</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>becn2772@gmail.com</h5>
            <a href="mailto:becn2772@gmail.com" target='_blank'>Send a message</a>
          </article>
          {/* <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Esteban Caiza</h5>
            <a href="https://m.messenger/" target='_blank'>Send a message</a>
          </article> */}
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+593 992908022</h5>
            <a href="https://whatsapp/" target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <FaTelegramPlane className='contact_option-icon'/>
            <h4>Telegram</h4>
            <h5>+593 992908022</h5>
            <a href="https://telegram/" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact