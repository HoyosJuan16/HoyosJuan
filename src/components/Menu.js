import React from 'react'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faBookOpen, faTh } from '@fortawesome/free-solid-svg-icons'

import '../css/Menu.css'

export const Menu = ({ selected }) => {
  return (
    <div className='menu-bar'>
      <h2 className='my-name'><span className='span-dev'>Dev</span>HoyosJuan</h2>
      <ul className='options-menu'>
        <li className={selected === '1' ? 'option selected' : 'option'}>
          <Link to='./'>
            <FontAwesomeIcon icon={faHome} /> <span>Inicio</span>
          </Link>
        </li>
        <li className={selected === '2' ? 'option selected' : 'option'}>
          <Link to='./about-me'>
            <FontAwesomeIcon icon={faBookOpen} /> <span> Sobre mi</span>
          </Link>
        </li>
        <li className={selected === '3' ? 'option selected' : 'option'}>
          <Link to='./my-portfolio'>
            <FontAwesomeIcon icon={faTh} /> <span>Mis Proyectos</span>
          </Link>
        </li>
      </ul>
      <ul className='social-networks'>
        <li><a href='./'><FontAwesomeIcon icon={faGithub} /></a></li>
        <li><a href='./'><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
        <li><a href='./'><FontAwesomeIcon icon={faEnvelope} /></a></li>
      </ul> 
    </div>
  )
}