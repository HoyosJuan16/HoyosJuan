import React, { useState , useEffect  } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faBookOpen, faTh } from '@fortawesome/free-solid-svg-icons'

import '../css/Menu.css'

export const Menu = ({ selected }) => {

  const [information,setInformation] = useState({})
  const [networks,setNetworks] = useState({})
  useEffect( () => {
    axios.get('https://backend-portfolio-hoyos-juan.herokuapp.com/about')
      .then(
        res => {
          setInformation(res.data[0])
          setNetworks(res.data[0].networks)
        }
      )}, [setInformation])

  return (
    <div className='menu-bar'>
      <h2 className='my-name'  
      onClick={()=>{
        console.log(information)
        console.log(information.about_me)
      }}><span className='span-dev'>Dev</span>HoyosJuan</h2>
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
        <li><a href={networks.github} target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} /></a></li>
        <li><a href={networks.linkedin} target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
        <li><a href={`mailto:${networks.email}`}><FontAwesomeIcon icon={faEnvelope} /></a></li>
      </ul> 
    </div>
  )
}