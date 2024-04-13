import React from 'react';

function Header({ navigateTo }) {
  console.log(navigateTo); // Log the navigateTo prop to check if it's received correctly
  return (
    <nav className="navbar">
      <div className="company-name">Flavourful Zenith</div>
      <ul className="nav-links">
        <li><button onClick={() => navigateTo('home')}>Home</button></li>
        <li><button onClick={() => navigateTo('menu')}>Menu</button></li>
        <li><button onClick={() => navigateTo('about')}>About</button></li>
        <li><button onClick={() => navigateTo('contact')}>Contact</button></li>
      </ul>
    </nav>
  );
}

export default Header;
