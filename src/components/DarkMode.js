import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'


export const DarkMode = ({ mode , actMode }) => {
  return (
    <button className={mode ? 'btn-mode dark-mode' : 'btn-mode dark-mode active'} onClick={() => actMode()}>
      <span><FontAwesomeIcon icon={faSun} /></span>
      <span><FontAwesomeIcon icon={faMoon} /></span>
    </button>
  )
}