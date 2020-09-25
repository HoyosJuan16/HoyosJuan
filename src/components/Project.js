import React, { Fragment } from "react"

export const Project = ({tecnologias,image,name,description,repositorio,web}) => {
  return (
    <Fragment>
      <div className='project'>
        <div className='front'>
          <img src={image} alt='Project 1' />
          <div className='tecnologias-usadas'>
            {
             tecnologias.length > 0 && tecnologias.map((tecnologia, index)=>
              <div className='icono-tec' key={index}>
                <img src={tecnologia} alt='icono' />
              </div>
             ) 
            }
          </div>
        </div>
        <div className='description-project'>
          <div className='name-and-labels'>
            <h3 className='name-project'>
              {name}
            </h3>
          </div>
          <p className='text-description'>
            {description}
          </p>
          <div className='buttons-project'>
            <a href={web} className='go-to-page' target='__blank'>Ver sitio web</a>
            <a href={repositorio} className='go-to-repository' target='__blank'>Ir al repositorio</a>
          </div>
        </div>
      </div>
    </Fragment>
  )
}