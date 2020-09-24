import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faBookOpen, faTh } from '@fortawesome/free-solid-svg-icons'

import '../css/Menu.css'

export const Menu = () => {
  return (
    <div className='menu-bar'>
      <h2 className='my-name'><span className='span-dev'>Dev</span>HoyosJuan</h2>
      <ul className='options-menu'>
        <li className='option selected'><a href='./'><FontAwesomeIcon icon={faHome} /> <span>Inicio</span></a></li>
        <li className='option'><a href='./'><FontAwesomeIcon icon={faBookOpen} /> <span> Sobre mi</span></a></li>
        <li className='option'><a href='./'><FontAwesomeIcon icon={faTh} /> <span>Mis Proyectos</span></a></li>
      </ul>
      <ul className='social-networks'>
        <li><a href='./'><FontAwesomeIcon icon={faGithub} /></a></li>
        <li><a href='./'><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
        <li><a href='./'><FontAwesomeIcon icon={faEnvelope} /></a></li>
      </ul> 
    </div>
  )
}