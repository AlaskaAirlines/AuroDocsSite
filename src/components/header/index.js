import React, { Component } from "react";
import './style.scss';

const ALLOWED_THEMES = ['alaska', 'hawaiian', 'atmos'];

class Header extends Component {
  constructor() {
    super();
    this.state = {
      siteTheme: 'alaska'
    };

    this.updateTheme = this.updateTheme.bind(this);
  }
  
  updateTheme(theme) {
    const safeTheme = ALLOWED_THEMES.includes(theme) ? theme : this.state.siteTheme;

    if (this.state.siteTheme !== safeTheme) {
      this.state.siteTheme = safeTheme;
      this.setState({ siteTheme: safeTheme });

      document.querySelectorAll('link[data-aag-theme]').forEach((link) => {
        link.remove();
      });

      const newTokenLink = document.createElement('link');
      newTokenLink.setAttribute('rel', 'stylesheet');
      newTokenLink.setAttribute('data-aag-theme', '');
      newTokenLink.setAttribute('href', `https://cdn.jsdelivr.net/npm/@aurodesignsystem/design-tokens/dist/web/${this.state.siteTheme}.min.css`);

      document.head.appendChild(newTokenLink);

      const newWcssLink = document.createElement('link');
      newWcssLink.setAttribute('rel', 'stylesheet');
      newWcssLink.setAttribute('data-aag-theme', '');
      let wcssHref = this.state.siteTheme;

      if (this.state.siteTheme === 'atmos') {
        wcssHref = 'auro-1';
      }

      newWcssLink.setAttribute('href', `https://cdn.jsdelivr.net/npm/@aurodesignsystem/webcorestylesheets@latest/dist/bundled/themes/${wcssHref}.global.min.css`);
      document.head.appendChild(newWcssLink);
    }
  }
  
  componentDidMount() {
    const themeSwitcher = document.querySelector('#theme-switcher');

    themeSwitcher.addEventListener('input', (e) => {
      this.updateTheme(e.target.value);
    });

    const searchInput = document.querySelector('#gsc-i-id1');

    if (searchInput) {
      searchInput.setAttribute('placeholder', 'Search Auro docs');
    }
  }
  
  render() {
    return (
      <header className="siteHeader">
        <auro-lockup>
          <span slot="title">Auro</span>
          <span slot="subtitle">design system</span>
        </auro-lockup>
        <div className="header-bar">
          <auro-select id="theme-switcher" className="theme-switcher" value="alaska" required>
            <span slot="label">Site Theme</span>
            <auro-menu>
              <auro-menuoption value="alaska">Alaska</auro-menuoption>
              <auro-menuoption value="hawaiian">Hawaiian</auro-menuoption>
              <auro-menuoption value="atmos">Atmos</auro-menuoption>
            </auro-menu>
          </auro-select>
        </div>
      </header>
    );
  }
}

export default Header;
