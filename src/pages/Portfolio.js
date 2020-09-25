import React, { Fragment } from 'react'
import { Menu } from '../components/Menu'
import { Project } from '../components/Project'

import iconHtml from '../icons/html.svg'
import iconCss from '../icons/css.svg'
import iconSass from '../icons/sass.svg'
import iconJs from '../icons/js.svg'
import iconJQuery from '../icons/jquery.svg'

import '../css/Portfolio.css'

export const Portfolio = () => {
  return (
    <Fragment>
      <div className='page'>
        <div className='container container-portfolio'>
          <h2 className='subtitle'>Mis proyectos</h2>
          <Project
            name='Juego de la memoria'
            description='El juego consiste en encontrar la pareja de cada cartas que estan boca abajo, la dificultad puede ser elegida o puede ser al azar.'
            tecnologias={[iconHtml,iconCss,iconSass,iconJs,iconJQuery]}
            web='https://hoyosjuan.github.io/busca-pareja/'
            repositorio='https://github.com/HoyosJuan/busca-pareja' 
            image='https://i.ibb.co/vL08Kvh/proyecto-memoria.png'
          />
          <Project
            name='Tienda Cursos'
            description='Una practica de una tienda orientada a cursos, pero obviamente aplicable a cualquier tipo de productos.'
            tecnologias={[iconHtml,iconCss,iconSass,iconJs]}
            web='https://hoyosjuan.github.io/tienda-cursos/'
            repositorio='https://github.com/HoyosJuan/tienda-cursos' 
            image='https://i.ibb.co/tZVhFSQ/proyecto-tienda-cursos.png'
          />
          <Project
            name='E-commerce Electrodomesticos'
            description='Una plantilla basica para una ecommerce. Me inspire en la pagina de mercado libre y la de una tienda llamada Fravega.'
            tecnologias={[iconHtml,iconCss,iconSass,iconJs]}
            web='https://hoyosjuan.github.io/E-commerce/'
            repositorio='https://github.com/HoyosJuan/E-commerce' 
            image='https://i.ibb.co/nDZVzBJ/proyecto-ecommerce.png'
          />
          <Project
            name='Blog Viajes'
            description='Una plantilla basica para un blog. Lo que llama la atencion de este blog es su banner y la forma en la que cambia el fondo de pantalla.'
            tecnologias={[iconHtml,iconCss,iconSass,iconJs]}
            web='https://hoyosjuan.github.io/BlogViajes/'
            repositorio='https://github.com/HoyosJuan/BlogViajes' 
            image='https://i.ibb.co/99WV61N/proyecto-blog-viajes.png'
          />
        </div>
      </div>
      <Menu 
        selected='3'
      />
    </Fragment>
  )
}