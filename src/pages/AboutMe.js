import React, { Fragment } from 'react'

import { InfoAboutMe } from '../components/InfoAboutMe'
import { Menu } from '../components/Menu'

import '../css/AboutMe.css'
import MyPhoto from '../images/perfil.jpg'
import iconHtml from '../icons/html.svg'
import iconCss from '../icons/css.svg'
import iconSass from '../icons/sass.svg'
import iconBootstrap from '../icons/bootstrap.svg'
import iconJs from '../icons/js.svg'
import iconJQuery from '../icons/jquery.svg'
import iconReactJS from '../icons/react.svg'
import iconNodeJS from '../icons/nodejs.svg'
import iconExpress from '../icons/express.svg'
import iconMongoDB from '../icons/mongodb.svg'
import iconPHP from '../icons/php.svg'
import iconSQL from '../icons/sql.svg'
import iconMySQL from '../icons/mysql.svg'
import iconGit from '../icons/git.svg'
import iconGitHub from '../icons/github.svg'
import iconBitbucket from '../icons/bitbucket.svg'

export const AboutMe = () => {
  return (
    <Fragment>
      <div className='page'>
        <div className='container container-about-me'>
          <InfoAboutMe
            btnVerMas={false}
            photo={MyPhoto}
            perfil={true}
          />
          <div className='box-6'>
            <h3 className='subtitle'>Intereses</h3>
            <p className="description-box">
              Soy un apasionado de la tecnología, enfocado en el desarrollo de aplicaciones especialmente con Javacript y su librería React . Siempre estoy en busca de retos profesionales, me gusta adquirir experiencia en proyectos a gran escala y posibilidades de mucho crecimiento.
            </p>
            <p className="description-box">
              Soy una persona autodidacta, día a día dedico tiempo para aprender en diferentes plataformas digitales como Platzi, Udemy, Youtube, documentación… en fin, cualquier plataforma que me pueda aportar conocimiento para crecer profesionalmente
            </p>
          </div>
          <div className='box-6'>
            <h3 className='subtitle'>Tecnologias</h3>
            <div className='icono-tecnologia'>
              <img src={iconHtml} alt='Logo html5' />
              <span>HTML5</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconCss} alt='Logo css' />
              <span>CSS</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconSass} alt='Logo Sass' />
              <span>SASS</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconBootstrap} alt='Logo Bootstrap' />
              <span>Bootstrap</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconJs} alt='Logo js' />
              <span>JavaScrip</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconJQuery} alt='Logo jQuery' />
              <span>jQuery</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconReactJS} alt='Logo React' />
              <span>ReactJS</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconNodeJS} alt='Logo NodeJS' />
              <span>NodeJS</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconExpress} alt='Logo Express' id='logoExpress' />
              <span>Express</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconMongoDB} alt='Logo MongoDB' />
              <span>MongoDB</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconPHP} alt='Logo PHP' />
              <span>PHP</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconSQL} alt='Logo SQL' />
              <span>SQL</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconMySQL} alt='Logo MySQL' />
              <span>MySQL</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconGit} alt='Logo Git' />
              <span>Git</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconGitHub} alt='Logo GitHub' />
              <span>GitHub</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconBitbucket} alt='Logo Bitbucket' />
              <span>Bitbucket</span>
            </div>
          </div>
        </div>
      </div>
      <Menu 
        selected='2'
      />
    </Fragment>
  )
}