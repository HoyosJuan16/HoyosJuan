import React, { useState } from 'react';

import { Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { AboutMe } from './pages/AboutMe'
import { Portfolio } from './pages/Portfolio'

export const App = () => {

  const [mode,setMode] = useState(false)


  const actualizarMode = () => {
    if(mode){
      setMode(false)
    }else{
      setMode(true)
    }
    console.log(mode)
  }
  return (
    <Switch>
      <Route exact path='/'>
        <Home 
          mode={mode}
          actMode={actualizarMode}
        />
      </Route>
      <Route exact path='/about-me'>
        <AboutMe 
          mode={mode}
          actMode={actualizarMode}
        />
      </Route>
      <Route exact path='/my-portfolio'>
        <Portfolio 
          mode={mode}
          actMode={actualizarMode}
        />
      </Route>
    </Switch>
  );
}

