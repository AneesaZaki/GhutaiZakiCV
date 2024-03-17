import React from 'react'
import './contact.css'

import { TfiEmail } from "react-icons/tfi";
import { ImWhatsapp } from "react-icons/im";
import { useRef } from 'react';
import emailjs from 'emailjs-com';




const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_91mfxnf', 'template_a7tk7km', form.current, 'IcKAitC7jzkaxZTW3')
      
    e.target.reset()
  };

  return (
    <section id='contact'>
      
      <h1 className='contact__heading'>Contact Me</h1>
      <h3 style={{color: 'pink'}}>Ready to build something great?</h3>
      <h5 className='intro'>If you have any oppurtunities, ideas or questions you want to throw my way, don't hesitate to message me!</h5> <br /><br /><br />

      <div className="container contact__container">

        <div className="contact__options">

        <article className="contact__option">
          <TfiEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>careers.ghutai@gmail.com</h5>
          <a href="mailto:careers.ghutai@gmail.com" target='_blank'>Send me an Email</a>
        </article>


        <article className="contact__option">
          <ImWhatsapp className='contact__option-icon'/>

          <h4>WhatsApp</h4>
          <h5>+1-540-446-6986</h5>
          <a href="https://api.whatsapp.com/send?phone+15404466986" target='_blank'>Send me an Message</a>
        </article>


        </div>

        {/* END OF THE CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder=' Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form> <br /><br /><br /><br /><br /><br />
      </div>
    </section>
  )
}

export default Contact