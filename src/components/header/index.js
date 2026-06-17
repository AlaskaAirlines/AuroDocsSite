import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './style.scss';
import SiteSearch from './SiteSearch';
import ThemeSwitcher from './ThemeSwitcher';

function Header() {
  const navigate = useNavigate();
  const lockupRef = useRef(null);

  // auro-lockup renders an internal <a href="/"> inside shadow DOM, which
  // triggers a full page reload (and resets the theme switcher). Click events
  // are composed: true and bubble out of the shadow root, so we listen on the
  // host element and preventDefault() to cancel the anchor's navigation, then
  // route via React Router instead. Modified clicks (cmd/ctrl/shift/middle)
  // fall through so "open in new tab" still works.
  //
  // Using a native addEventListener via ref (rather than React's onClick prop)
  // avoids any synthetic-event retargeting quirks with web components, and
  // listening on the host (rather than reaching into the shadow root) keeps us
  // off Auro's internal DOM structure.
  useEffect(() => {
    const host = lockupRef.current;
    if (!host) return undefined;

    const onClick = (e) => {
      if (e.defaultPrevented) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      e.preventDefault();
      navigate('/');
    };

    host.addEventListener('click', onClick);
    return () => host.removeEventListener('click', onClick);
  }, [navigate]);

  return (
    <header className="siteHeader">
      <auro-lockup ref={lockupRef}>
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
