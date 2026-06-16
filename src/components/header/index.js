import React from "react";
import './style.scss';
import SiteSearch from './SiteSearch';
import ThemeSwitcher from './ThemeSwitcher';

function Header() {
  return (
    <header className="siteHeader">
      <auro-lockup>
        <span slot="title">Auro</span>
        <span slot="subtitle">design system</span>
      </auro-lockup>
      <div className="header-bar">
        <SiteSearch />
        <ThemeSwitcher />
      </div>
    </header>
  );
}

export default Header;
