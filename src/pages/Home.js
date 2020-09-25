import React, { Fragment } from 'react'

import { InfoAboutMe } from '../components/InfoAboutMe'
import { Menu } from '../components/Menu'

import '../css/Home.css'
import Banner from '../images/banner.svg'

export const Home = ({ mode , actMode }) => {

  return (
    <Fragment>
      <div className={mode ? 'page page-dark' : 'page page-light'}>
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
                <img src='https://i.ibb.co/frj7PG9/proyecto-memoria.png' alt='project' />
              </div>
              <h2 className='name-project-resume'>Juego de la memoria</h2>
              <p className='label-project-resume'>Mi primer juego con js</p>
            </div>
            <div className='project-resume'>
              <div className='portada-project-resume'>
                <img src='https://i.ibb.co/4shf3cK/proyecto-tienda-cursos.png' alt='project' />
              </div>
              <h2 className='name-project-resume'>Tienda Cursos</h2>
              <p className='label-project-resume'>Tienda simple con js</p>
            </div>
            <div className='project-resume'>
              <div className='portada-project-resume'>
                <img src='https://i.ibb.co/d0DLFVr/proyecto-blog-viajes.png' alt='project' />
              </div>
              <h2 className='name-project-resume'>Blog Viajes</h2>
              <p className='label-project-resume'>Plantilla de blog</p>
            </div>
            <div className='project-resume'>
              <div className='portada-project-resume'>
                <img src='https://i.ibb.co/Vvrh2x4/proyecto-ecommerce.png' alt='project' />
              </div>
              <h2 className='name-project-resume'>E-commerce</h2>
              <p className='label-project-resume'>Plantilla de e-commerce</p>
            </div>
          </div>
        </div>
      </div>
      <Menu 
        selected='1'
        mode={mode}
        actMode={actMode}
      />
    </Fragment>
  )
}