import React from 'react'
import './education.css'
import { IoMdSchool } from 'react-icons/io'
import { FaSchool } from 'react-icons/fa'
const Education = () => {
  return (
    <section id='education'>
      <h5>Education</h5>
      <h2>Education Highlights</h2>
      <div className="container education__container">
        <article className="education">
          <div className="education__head">
            <div className='edlevel'>
              <IoMdSchool />
              <h3> B Tech</h3>
            </div>


            <p > <small><FaSchool /></small> Government Engineering College Wayanad</p>

            <hr />
            <p style={{textAlign:"left",paddingLeft:"2rem"}}><small className='text-light' style={{marginRight:"2rem"}}>University :</small>KTU</p>
            <hr />
            <p style={{textAlign:"left",paddingLeft:"2rem"}}><small className='text-light' style={{marginRight:"2rem"}}>CGPA/%:</small>8.62</p>
          </div>
        </article>
        <article className="education">
          <div className="education__head">
            <div className='edlevel'>
              <IoMdSchool />
              <h3>+2</h3>
            </div>


            <p > <small><FaSchool /></small> Government  Higher Secondary School KAKKAVAYAL</p>
            
            <hr />
            <p style={{textAlign:"left",paddingLeft:"2rem"}}><small className='text-light' style={{marginRight:"2rem"}}>Board :</small>HSE</p>
            <hr />
            <p style={{textAlign:"left",paddingLeft:"2rem"}}><small className='text-light' style={{marginRight:"2rem"}}>CGPA/%:</small>91.58</p>
          </div>
        </article>
        <article className="education">
          <div className="education__head">
            <div className='edlevel'>
              <IoMdSchool />
              <h3>10 <sup>th</sup></h3>
            </div>


            <p ><small><FaSchool /></small> St Joseph's Convent School  Kalpetta</p>
            <hr />
            <p style={{textAlign:"left",paddingLeft:"2rem"}}><small className='text-light' style={{marginRight:"2rem"}}>Board:</small>CBSE</p>
            <hr />
            <p style={{textAlign:"left",paddingLeft:"2rem"}}><small className='text-light' style={{marginRight:"2rem"}}>CGPA/%:</small>10</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Education