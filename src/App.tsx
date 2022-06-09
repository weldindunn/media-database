import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/navBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>Welcome to DEC's Media Contact Database!</span>
      </header>
      <NavBar></NavBar>
    </div>
  );
}

export default App;
