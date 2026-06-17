import React from "react";
import { useNavigate } from "react-router-dom";
import './style.scss';
import SiteSearch from './SiteSearch';
import ThemeSwitcher from './ThemeSwitcher';

function Header() {
  const navigate = useNavigate();

  // auro-lockup renders an internal <a href="/"> inside shadow DOM, which
  // triggers a full page reload (and resets the theme switcher). Intercept
  // the bubbled click and route via React Router instead. Modified clicks
  // (cmd/ctrl/shift/middle-click) fall through so "open in new tab" still
  // works.
  const onLockupClick = (e) => {
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    navigate('/');
  };

  return (
    <header className="siteHeader">
      <auro-lockup onClick={onLockupClick}>
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
