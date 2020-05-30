import React from 'react';
import logo from '../img/logo.svg';
import Grid from './Grid';
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Grid />
    </div>
  );
}

export default App;
