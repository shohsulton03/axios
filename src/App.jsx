import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Carusel from './components/Carusel';
import Products from './components/Products';

function App() {

  return (
    <div className="container">
      <Navbar />
      <Carusel />
      <Products />
    </div>
  );
}

export default App
