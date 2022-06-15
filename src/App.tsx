import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/navBar';
import { HeaderCarousel } from './components/headerCarousel';

function App() {
  return (
    <div className="App">
      <HeaderCarousel></HeaderCarousel>
      <NavBar></NavBar>
    </div>
  );
}

export default App;
