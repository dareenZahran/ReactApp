import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import '../Home/index'
import '../Home'
function Header() {
  return (
    <header>
      <Link to="/">
        <h1>Hungry</h1>
        
        </Link>
        <p>Dareen Zahran <br></br>202007169</p>
    </header>
  );
}

export default Header;
