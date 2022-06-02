import React from 'react';
import './style.scss';

function Header() {
  return (
    <header className="siteHeader" role="banner">
      <auro-lockup>
        <span slot="title">Auro</span>
        <span slot="subtitle">design system</span>
      </auro-lockup>

    </header>
  );
}

export default Header;
