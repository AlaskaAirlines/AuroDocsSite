import React, { Component } from 'react';
import { swapSearchButtonIcon } from './searchIconSwap';

const HOST_ID = 'gcse-search-host';
const GCSE_SCRIPT_SRC = 'https://cse.google.com/cse.js?cx=b792c366f1ce73e3d';

class SiteSearch extends Component {
  componentDidMount() {
    // Load Google Custom Search on demand and explicitly render the widget
    // into our React-mounted host div. `parsetags: 'explicit'` keeps GCS from
    // auto-scanning the page — we own the timing instead.
    const renderGcseSearch = () => {
      if (window.google && window.google.search && window.google.search.cse) {
        try {
          window.google.search.cse.element.render({
            div: HOST_ID,
            tag: 'search',
          });
        } catch (e) {
          // Already rendered, or div not yet present — safe to ignore.
        }
      }
    };

    window.__gcse = {
      parsetags: 'explicit',
      callback: renderGcseSearch,
    };

    // Avoid injecting a duplicate GCSE script on remount/HMR — the callback
    // only fires on the initial load, so render directly if it's already there.
    const existingScript = document.querySelector(`script[src="${GCSE_SCRIPT_SRC}"]`);
    if (existingScript) {
      renderGcseSearch();
    } else {
      const gcseScript = document.createElement('script');
      gcseScript.async = true;
      gcseScript.src = GCSE_SCRIPT_SRC;
      document.head.appendChild(gcseScript);
    }

    // GCS re-renders #gsc-i-id1 on focus/blur/results, wiping any placeholder
    // we set. Re-apply via MutationObserver so it sticks. The icon swap also
    // re-runs on every tick so the auro-icon survives GCS re-renders.
    const applySearchCustomizations = () => {
      const searchInput = document.querySelector('#gsc-i-id1');
      if (searchInput && searchInput.getAttribute('placeholder') !== 'Search') {
        searchInput.setAttribute('placeholder', 'Search');
      }

      swapSearchButtonIcon();
    };

    applySearchCustomizations();

    const searchContainer = document.getElementById(HOST_ID);
    if (searchContainer && typeof MutationObserver !== 'undefined') {
      this.searchObserver = new MutationObserver(applySearchCustomizations);
      this.searchObserver.observe(searchContainer, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['placeholder'],
      });
    }
  }

  componentWillUnmount() {
    if (this.searchObserver) {
      this.searchObserver.disconnect();
      this.searchObserver = null;
    }
  }

  render() {
    return <div id={HOST_ID} />;
  }
}

export default SiteSearch;
