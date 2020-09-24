import React from 'react';

import { Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { AboutMe } from './pages/AboutMe'
import { Portfolio } from './pages/Portfolio'

export const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={ Home }/>
      <Route exact path='/about-me' component={ AboutMe }/>
      <Route exact path='/my-portfolio' component={ Portfolio }/>
    </Switch>
  );
}

