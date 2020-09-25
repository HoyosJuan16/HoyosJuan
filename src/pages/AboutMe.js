import React, { Fragment , useState , useEffect  } from 'react'
import axios from 'axios'

import { InfoAboutMe } from '../components/InfoAboutMe'
import { Menu } from '../components/Menu'
import { Loader } from '../components/Loader'

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

  const [skills,setSkills] = useState([])
  const [loading,setLoading] = useState(true)
  const [intereses,setIntereses] = useState([])
  useEffect( () => {
    axios.get('https://backend-portfolio-hoyos-juan.herokuapp.com/about')
      .then(
        res => {
          setSkills(res.data[0].skills)
          setIntereses(res.data[0].intereses)
          setLoading(false)
        }
      )}, [setSkills])

  return (
    <Fragment>
      <Loader 
        cargar={loading}
      />
      <div className='page'>
        <div className='container container-about-me'>
          <InfoAboutMe
            btnVerMas={false}
            photo={MyPhoto}
            perfil={true}
          />
          <div className='box-6'>
            <h3 className='subtitle' onClick={()=>console.log(skills)}>Intereses</h3>
            <p className="description-box">
              {intereses.puno}
            </p>
            <p className="description-box">
              {intereses.pdos}
            </p>
          </div>
          <div className='box-6'>
            <h3 className='subtitle'>Tecnologias</h3>
            <div className='icono-tecnologia'>
              <img src={iconHtml} alt='Logo html5' />
              <span>{skills[0]}</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconCss} alt='Logo css' />
              <span>{skills[1]}</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconSass} alt='Logo Sass' />
              <span>{skills[2]}</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconBootstrap} alt='Logo Bootstrap' />
              <span>{skills[3]}</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconJs} alt='Logo js' />
              <span>{skills[4]}</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconJQuery} alt='Logo jQuery' />
              <span>{skills[5]}</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconReactJS} alt='Logo React' />
              <span>{skills[6]}</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconNodeJS} alt='Logo NodeJS' />
              <span>{skills[7]}</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconExpress} alt='Logo Express' id='logoExpress' />
              <span>{skills[8]}</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconMongoDB} alt='Logo MongoDB' />
              <span>{skills[9]}</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconPHP} alt='Logo PHP' />
              <span>{skills[10]}</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconSQL} alt='Logo SQL' />
              <span>{skills[11]}</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconMySQL} alt='Logo MySQL' />
              <span>{skills[12]}</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconGit} alt='Logo Git' />
              <span>{skills[13]}</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconGitHub} alt='Logo GitHub' />
              <span>{skills[13]}</span>
            </div>
            <div className='icono-tecnologia'>
              <img src={iconBitbucket} alt='Logo Bitbucket' />
              <span>{skills[14]}</span>
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