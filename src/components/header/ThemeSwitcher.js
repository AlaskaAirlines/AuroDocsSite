import React, { Component, createRef } from 'react';

const ALLOWED_THEMES = ['alaska', 'hawaiian', 'atmos'];
const DEFAULT_THEME = 'alaska';

class ThemeSwitcher extends Component {
  constructor() {
    super();
    this.state = {
      siteTheme: DEFAULT_THEME,
    };

    this.switcherRef = createRef();
    this.onInput = this.onInput.bind(this);
  }

  onInput(e) {
    const theme = e.target.value;
    const safeTheme = ALLOWED_THEMES.includes(theme) ? theme : this.state.siteTheme;

    if (this.state.siteTheme === safeTheme) {
      return;
    }

    this.setState({ siteTheme: safeTheme });

    document.querySelectorAll('link[data-aag-theme]').forEach((link) => {
      link.remove();
    });

    const newTokenLink = document.createElement('link');
    newTokenLink.setAttribute('rel', 'stylesheet');
    newTokenLink.setAttribute('data-aag-theme', '');
    newTokenLink.setAttribute('href', `/tokens/web/${safeTheme}.min.css`);
    document.head.appendChild(newTokenLink);

    const newWcssLink = document.createElement('link');
    newWcssLink.setAttribute('rel', 'stylesheet');
    newWcssLink.setAttribute('data-aag-theme', '');
    newWcssLink.setAttribute('href', `/styles/bundled/themes/${safeTheme}.global.min.css`);
    document.head.appendChild(newWcssLink);
  }

  componentDidMount() {
    if (this.switcherRef.current) {
      this.switcherRef.current.addEventListener('input', this.onInput);
    }
  }

  componentWillUnmount() {
    if (this.switcherRef.current) {
      this.switcherRef.current.removeEventListener('input', this.onInput);
    }
  }

  render() {
    return (
      <auro-select ref={this.switcherRef} id="theme-switcher" value={DEFAULT_THEME} required>
        <span slot="label">Site Theme</span>
        <auro-menu>
          <auro-menuoption value="alaska">Alaska</auro-menuoption>
          <auro-menuoption value="hawaiian">Hawaiian</auro-menuoption>
          <auro-menuoption value="atmos">Atmos</auro-menuoption>
        </auro-menu>
      </auro-select>
    );
  }
}

export default ThemeSwitcher;
