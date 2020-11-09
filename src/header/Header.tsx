import React from 'react';
import logo from '../logo.png';
import './Header.css';

const Header = () => 
  <div className="app-header">  
    <img src={logo} className="app-logo" alt="Plantala logo" />
    <h1>Plantala</h1>
  </div>

export default Header;
