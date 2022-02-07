import React from 'react';

function Navbar() {
  return (
      <nav>
        <a href="#" className='logo'>
            <h2>Logo</h2>
        </a>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Agents</a></li>
            <li><a href='#'>Property</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>
        <a href='#' className='property'>Properties</a>
      </nav>
  );
}

export default Navbar;
