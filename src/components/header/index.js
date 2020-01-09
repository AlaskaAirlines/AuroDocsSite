import React from 'react';
import './style.scss';
import logo from '../..//assets/logo.png';

function Header() {
  return (
    <header className="siteHeader">
      <a href="/">
        <img src={logo} alt="Alaska | Auro Design System logo" />
      </a>

    </header>
  );
}

export default Header;
