import React from 'react'

import '../css/Loader.css'

export const Loader = ({ cargar , mode }) => {
  return (
    <div 
      className={ cargar  
                  ? (mode
                    ? 'loader loader-dark'
                    : 'loader loader-light')
                  : 'no-loader'}
    >
      <div className="spinner-box">
        <div className="circle-border">
          <div className="circle-core"></div>
        </div>
      </div>
    </div>
  )
}