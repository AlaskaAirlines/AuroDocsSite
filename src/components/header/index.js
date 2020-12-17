import React from 'react';
import './style.scss';

function Header() {
  return (
    <header className="siteHeader">
      <a href="/" className="headerLinkBox">
        <div className="logoIcon">
          <auro-alaska official></auro-alaska>
        </div>
        <div className="headerTitle">
          <span className="headerTitle-title">Auro</span>
          <span className="headerTitle-tagline">Design System</span>
        </div>
      </a>

    </header>
  );
}

export default Header;
