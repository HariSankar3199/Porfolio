import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>harisankarvalath1@gmail.com</h5>
            <a href="mailto:harisankarvalath1@gmail.com" target='_blank'>Send a Message</a>
          </article>
         
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+919747857477</h5>
            <a href="https://api.whatsapp.com/send?phone=+919747857477" target='_blank'>Send a Message</a>
          </article>
        </div>
        {/* <form action="">
          <input type="text" name="name"  placeholder='Your Full Name'id="" required/>
          <input type="email" name="email"  placeholder='Email'id="" required/>
<textarea name="message"  id="" cols="30" rows="7"placeholder=' Your Message'></textarea>
<button type="submit" className='btn btn-primary'>Send Message</button>
        </form> */}
      </div>
    </section>
  )
}

export default Contact