import React from 'react';

import { Home } from './pages/Home'
import { AboutMe } from './pages/AboutMe'
import { Portfolio } from './pages/Portfolio'

export const App = () => {
  return (
    <div className="App"> 
      <Home />
      <AboutMe />
      <Portfolio />
    </div>
  );
}

