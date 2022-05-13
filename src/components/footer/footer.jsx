import React from 'react'
import './footer.css'
import {ImFacebook2} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a hreff='#'className='footer__logo'>Satyam</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#contact'>Contact</a></li>
        
      </ul>
      <div className='footer__socials'>
        <a href='https;//facebook.com'><ImFacebook2/></a>
        <a href='https;//instagram.com'><BsInstagram/></a>
        <a href='https;//twitter.com'><BsTwitter/></a>
        <a href='https;//linkedin.com/in/satyam-kumar-910691221'><BsLinkedin/></a>
      </div>
    </footer>

  )
}

export default footer
