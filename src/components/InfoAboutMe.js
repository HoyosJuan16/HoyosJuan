import React from 'react'

import { Label } from './Label'
import { Gretting } from './Gretting'
import { Professions } from './Professions'

import '../css/InfoAboutMe.css'

export const InfoAboutMe = ({ btnVerMas, photo, perfil }) => {
  return (
    <div className='about-me'>
      <div className='info-about-me'>
        <Label>Sobre mí</Label>
        <Gretting />
        <Professions />
        <p className='description-about-me'>
          Estudiante autodidacta interesado en el mundo del desarrollo web. Amante de javascript y de los problemas que no son falcil de resolver.
        </p>
        {
          btnVerMas && <a href='./' className='btn'>ver más</a>
        }
      </div>
      <div className='img-about-me'>
        <img src={photo} alt='img-banner' width={perfil ? '320' : '100%'} />
      </div>
    </div>
  )
}