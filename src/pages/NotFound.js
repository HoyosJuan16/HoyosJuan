import React, { Fragment } from 'react'

import { Menu } from '../components/Menu'

import img404 from '../images/404.svg'

import '../css/NotFound.css'

export const NotFound = ({ mode , actMode }) => {

  return (
    <Fragment>
      <div className={mode ? 'page page-dark' : 'page page-light'}>
        <div className='container container-not-found'>
          <img src={img404} alt='404' />
        </div>
      </div>
      <Menu 
        selected='0'
        mode={mode}
        actMode={actMode}
      />
    </Fragment>
  )
}