import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Description from './components/Description';
import Cards from './components/Cards';

function App() {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <Description/>
      <Cards/>
    </div>
  );
}

export default App;
