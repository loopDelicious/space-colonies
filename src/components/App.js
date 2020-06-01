import React from 'react';
import otter from '../img/otter.jpg';
import Grid from './Grid';
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={otter} className="App-logo" alt="logo" />
      </header>
      <Grid />
    </div>
  );
}

export default App;
