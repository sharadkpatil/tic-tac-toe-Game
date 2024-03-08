import React from 'react'

import logo from './logo.svg';
import './App.css';
import {FunComponent} from './components/FunctionalComponent';
import GCC from './components/ClassComponent';
import Game from './components/Game';


function App() {
  return (
    <div className="App">      
      <h1>Tic-Tac-Toe</h1>
      <Game></Game>
    </div> 
  );
}

export default App;
