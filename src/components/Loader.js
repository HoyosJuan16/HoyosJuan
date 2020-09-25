import React from 'react'

import '../css/Loader.css'

export const Loader = ({ cargar }) => {
  return (
    <div className={ cargar ? 'loader' : 'no-loader'}>
      <div className="spinner-box">
        <div className="circle-border">
          <div className="circle-core"></div>
        </div>
      </div>
    </div>
  )
}