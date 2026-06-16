import React, { useEffect, useRef, useState } from 'react';

const THEMES = ['alaska', 'hawaiian', 'atmos'];
const DEFAULT_THEME = 'alaska';

// Recover the active theme from the previously-injected token stylesheet so
// that on remount we don't reset state back to alaska while hawaiian/atmos
// links remain on <head>.
const detectCurrentTheme = () => {
  const tokenLink = document.querySelector('link[data-aag-theme][href*="/tokens/web/"]');
  const href = tokenLink && tokenLink.getAttribute('href');
  const match = href && href.match(/\/tokens\/web\/([^.]+)\.min\.css/);
  return match && THEMES.includes(match[1]) ? match[1] : DEFAULT_THEME;
};

function ThemeSwitcher() {
  const switcherRef = useRef(null);
  const [theme, setTheme] = useState(detectCurrentTheme);
  const isFirstRender = useRef(true);

  // Apply the theme to <head> whenever it changes. Skip the first render so
  // we don't redundantly re-inject the already-applied theme on mount.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    document.querySelectorAll('link[data-aag-theme]').forEach((link) => link.remove());

    const addLink = (href) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.dataset.aagTheme = '';
      link.href = href;
      document.head.appendChild(link);
    };

    addLink(`/tokens/web/${theme}.min.css`);
    addLink(`/styles/bundled/themes/${theme}.global.min.css`);
  }, [theme]);

  useEffect(() => {
    const el = switcherRef.current;
    if (!el) return undefined;

    const onInput = (e) => {
      if (THEMES.includes(e.target.value)) {
        setTheme(e.target.value);
      }
    };

    el.addEventListener('input', onInput);
    return () => el.removeEventListener('input', onInput);
  }, []);

  return (
    <auro-select ref={switcherRef} id="theme-switcher" value={theme} required>
      <span slot="label">Site Theme</span>
      <auro-menu>
        {THEMES.map((t) => (
          <auro-menuoption key={t} value={t}>
            {t[0].toUpperCase() + t.slice(1)}
          </auro-menuoption>
        ))}
      </auro-menu>
    </auro-select>
  );
}

export default ThemeSwitcher;
