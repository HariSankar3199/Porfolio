import React from 'react'
import {  BsPatchCheckFill } from 'react-icons/bs'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front End Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              < BsPatchCheckFill className='experience__details-icon' />
              <div><h4>HTML</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className="experience__details">
              < BsPatchCheckFill className='experience__details-icon' />
              <div><h4>css</h4>
              <small className='text-light'>Intermediate</small>
              </div>

            </article>
            <article className="experience__details">
              < BsPatchCheckFill className='experience__details-icon' />
              <div> <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              < BsPatchCheckFill className='experience__details-icon' />
             <div> <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
              </div></article>
            <article className="experience__details">
              < BsPatchCheckFill className='experience__details-icon' />
             <div> <h4>React</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>


          </div>

        </div>
        <div className="experience__backend">
          <h3>Back End Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              < BsPatchCheckFill className='experience__details-icon'  />
              <div> <h4>Node JS</h4>
              <small className='text-light'>Intermediate</small>
              </div></article>
            <article className="experience__details">
              < BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Express JS</h4>
              <small className='text-light'>Intermediate</small>

              </div>
            </article>
            <article className="experience__details">
              < BsPatchCheckFill className='experience__details-icon' />
              <div><h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              < BsPatchCheckFill className='experience__details-icon' />
              <div><h4>OracleSql</h4>
              <small className='text-light'>Intermediate</small>
              </div></article>



          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience