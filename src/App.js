import React, { useState , useEffect } from 'react';

import { Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { AboutMe } from './pages/AboutMe'
import { Portfolio } from './pages/Portfolio'
import { NotFound } from './pages/NotFound'

export const App = () => {

  const [mode,setMode] = useState(true)

  useEffect(()=>{
    let aux = localStorage.getItem('modeDark') || 'true'
    if(aux==='false'){
      setMode(false)
    }else{
      setMode(true)
    }
  }, [setMode])

  const actualizarMode = () => {
    if(mode){
      localStorage.setItem('modeDark', 'false')
      setMode(false)
    }else{
      localStorage.setItem('modeDark', 'true')
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
      <Route >
        <NotFound
          mode={mode}
          actMode={actualizarMode}
        />
      </Route>
    </Switch>
  );
}

