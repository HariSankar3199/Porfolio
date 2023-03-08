import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../images/Me.jpg'
import Headersocial from './headersocial'
const Header = () => {
  return (
<header id='hed'>
    <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Hari Sankar</h1>
        <h5 className='text-light'>Entry-Level MernStack Developer</h5>
        <CTA/>
        <Headersocial/>
        <div className='me'>
          <img src={Me} alt="Me"/>
        </div>
        <a href="#contact" className='scroll__down'>scroll </a>
    </div>
</header>
  )
}

export default Header