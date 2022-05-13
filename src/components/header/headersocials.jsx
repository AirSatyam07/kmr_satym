import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


const headersocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/satyam-kumar-910691221" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/AirSatyam07" target="_blank"><BsGithub/></a>
        <a href='https://instagram.com/kmr_satym' target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default headersocials