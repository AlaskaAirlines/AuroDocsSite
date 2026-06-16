import React, { useEffect, useRef } from 'react';
import { HOST_ID, swapSearchButtonIcon } from './searchIconSwap';

const GCSE_SCRIPT_SRC = 'https://cse.google.com/cse.js?cx=b792c366f1ce73e3d';

function SiteSearch() {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    // Load Google Custom Search on demand and explicitly render the widget
    // into our React-mounted host div. `parsetags: 'explicit'` keeps GCS from
    // auto-scanning the page — we own the timing instead.
    const renderGcseSearch = () => {
      if (window.google?.search?.cse) {
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

    // Avoid injecting a duplicate GCSE script on remount/HMR. Three cases:
    //   1) No script yet → inject; the callback above fires on load.
    //   2) Script present and API ready → render directly.
    //   3) Script present but API not yet ready (still loading) → do nothing;
    //      the callback we just installed will fire when load finishes.
    const existingScript = document.querySelector(`script[src="${GCSE_SCRIPT_SRC}"]`);
    if (!existingScript) {
      const gcseScript = document.createElement('script');
      gcseScript.async = true;
      gcseScript.src = GCSE_SCRIPT_SRC;
      document.head.appendChild(gcseScript);
    } else if (window.google?.search?.cse) {
      renderGcseSearch();
    }

    // GCS re-renders its input/button subtree on focus/blur/results, wiping
    // any customizations we apply. Re-apply on every relevant DOM change.
    const applySearchCustomizations = () => {
      const searchInput = host.querySelector('#gsc-i-id1');
      if (searchInput && searchInput.getAttribute('placeholder') !== 'Search') {
        searchInput.setAttribute('placeholder', 'Search');
      }
      swapSearchButtonIcon();
    };

    applySearchCustomizations();

    let observer;
    if (typeof MutationObserver !== 'undefined') {
      observer = new MutationObserver(applySearchCustomizations);
      // childList + subtree is enough: GCS replaces nodes wholesale on each
      // re-render, so we don't need to watch individual attributes (which
      // would also create a feedback loop with our own setAttribute calls).
      observer.observe(host, { childList: true, subtree: true });
    }

    return () => {
      if (observer) observer.disconnect();
      // Drop the global only if it still points at this mount's closure, so
      // a remount that already installed a fresh callback isn't clobbered.
      if (window.__gcse && window.__gcse.callback === renderGcseSearch) {
        delete window.__gcse;
      }
    };
  }, []);

  return <div ref={hostRef} id={HOST_ID} />;
}

export default SiteSearch;
