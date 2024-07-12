import React from 'react';

function Header({ navigateTo, currentPage, isScrolled }) {
  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="company-name">Flavourful Zenith</div>
      <ul className="nav-links">
        <li><button onClick={() => navigateTo('home')} className={currentPage === 'home' ? 'active' : ''}>Home</button></li>
        <li><button onClick={() => navigateTo('menu')} className={currentPage === 'menu' ? 'active' : ''}>Menu</button></li>
        <li><button onClick={() => navigateTo('about')} className={currentPage === 'about' ? 'active' : ''}>About</button></li>
        <li><button onClick={() => navigateTo('contact')} className={currentPage === 'contact' ? 'active' : ''}>Contact</button></li>
      </ul>
    </nav>
  );
}

export default Header;