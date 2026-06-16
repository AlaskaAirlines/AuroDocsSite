import React, { useEffect, useRef } from 'react';

const THEMES = ['alaska', 'hawaiian', 'atmos'];
const DEFAULT_THEME = 'alaska';

function ThemeSwitcher() {
  const switcherRef = useRef(null);

  useEffect(() => {
    let currentTheme = DEFAULT_THEME;

    const onInput = (e) => {
      const theme = e.target.value;
      if (!THEMES.includes(theme) || theme === currentTheme) return;
      currentTheme = theme;

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
    };

    const el = switcherRef.current;
    el.addEventListener('input', onInput);
    return () => el.removeEventListener('input', onInput);
  }, []);

  return (
    <auro-select ref={switcherRef} id="theme-switcher" value={DEFAULT_THEME} required>
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
