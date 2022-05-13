import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


const headersocials = () => {
  return (
    <div className='header__socials'>
        <a href="linkedin.com/in/satyam-kumar-910691221" target="_blank"><BsLinkedin/></a>
        <a href="www.github.com" target="_blank"><BsGithub/></a>
        <a href='www.instagram.com' target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default headersocials