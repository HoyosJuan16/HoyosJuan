import React, { Fragment } from 'react';

import { Home } from './pages/Home'
import { AboutMe } from './pages/AboutMe'
import { Portfolio } from './pages/Portfolio'
import { Menu } from './components/Menu'

export const App = () => {
  return (
    <Fragment> 
      <Home />
      <Menu />
      <AboutMe />
      <Portfolio />
    </Fragment>
  );
}

