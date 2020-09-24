import React, { Fragment } from 'react'

import { InfoAboutMe } from '../components/InfoAboutMe'
import { Menu } from '../components/Menu'

import '../css/Home.css'
import Banner from '../images/banner.svg'

export const Home = () => {
  return (
    <Fragment>
      <div className='page'>
        <div className='container container-home'>
          <InfoAboutMe
            btnVerMas={true}
            photo={Banner}
            perfil={false}
          />
          <h2 className='subtitle'>Mis proyectos</h2>
          <div className='recent'>
            <div className='project-resume'>
              <div className='portada-project-resume'>
                <img src='https://i.pinimg.com/originals/64/29/75/642975b5a9f8b8414d5f3d4a6415fefc.jpg' alt='project' />
              </div>
              <h2 className='name-project-resume'>Space</h2>
              <p className='label-project-resume'>Creado con ReactJS</p>
            </div>
            <div className='project-resume'>
              <div className='portada-project-resume'>
                <img src='https://i.pinimg.com/originals/64/29/75/642975b5a9f8b8414d5f3d4a6415fefc.jpg' alt='project' />
              </div>
              <h2 className='name-project-resume'>Space</h2>
              <p className='label-project-resume'>Creado con ReactJS</p>
            </div>
            <div className='project-resume'>
              <div className='portada-project-resume'>
                <img src='https://i.pinimg.com/originals/64/29/75/642975b5a9f8b8414d5f3d4a6415fefc.jpg' alt='project' />
              </div>
              <h2 className='name-project-resume'>Space</h2>
              <p className='label-project-resume'>Creado con ReactJS</p>
            </div>
            <div className='project-resume'>
              <div className='portada-project-resume'>
                <img src='https://i.pinimg.com/originals/64/29/75/642975b5a9f8b8414d5f3d4a6415fefc.jpg' alt='project' />
              </div>
              <h2 className='name-project-resume'>Space</h2>
              <p className='label-project-resume'>Creado con ReactJS</p>
            </div>
          </div>
        </div>
      </div>
      <Menu 
        selected='1'
      />
    </Fragment>
  )
}