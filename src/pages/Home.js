import React from 'react'

import Banner from '../images/banner.svg'

export const Home = () => {
  return (
    <div className='home'>
      <div className='container container-home'>
        <div className='resume-about-me'>
          <div className='info-resume-about-me'>
            <h3 className='label-title'>Sobre mí</h3>
            <h2 className='gretting'>Hola, soy <br/> Hoyos Juan</h2>
            <h1 className='professions'>Full Stack Developer</h1>
            <p className='description-resume'>
              Estudiante autodidacta interesado en el mundo del desarrollo web. Amante de javascript y de los problemas que no son falcil de resolver.
            </p>
            <a href='./' className='btn'>ver más</a>
          </div>
          <div className='img-banner'>
            <img src={Banner} alt='img-banner' />
          </div>
        </div>
        <div className='recent'>
          <h2 className='subtitle'>Mis proyectos</h2>
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
  )
}