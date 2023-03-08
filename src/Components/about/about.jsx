import React from 'react'
import './about.css'
import Me from '../../images/M2.jpg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>3+ completed</small>
            </article>


          </div>
          <p>Inquisitive, enthusiastic and energetic graduate skilled in
            leadership and team playing with a good foundation in
            problem solving, logic and interpersonal skills. Seeking job to
            leverage solid skills in collaboration, communication, and
            development as a person as well as to passionately contribute my
            skills to the upliftment of the company..Please find my detailed Resume for your consideration. Should you need any more details,
            please do let me know. </p>
          <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>



    </section>

  )
}

export default About