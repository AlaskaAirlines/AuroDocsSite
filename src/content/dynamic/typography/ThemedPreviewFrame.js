import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { getThemeCssUrl, CDN_URL } from '~/config/themes';

const TOKENS_BUNDLED = `${CDN_URL}/design-tokens@latest/dist/themes/CSSCustomProperties--bundled.css`;
const ELEMENT_DEMO_STYLES = `${CDN_URL}/webcorestylesheets@latest/dist/elementDemoStyles.css`;

// Register auro-header inside the iframe
const AURO_HEADER_SCRIPT = `${CDN_URL}/auro-header@latest/dist/auro-header__bundled.js`;

export default function ThemedPreviewFrame({ themeSlug, themeCode, children }) {
  const iframeRef = useRef(null);
  const rootRef = useRef(null);
  const roRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument;
    const win = iframe.contentWindow;
    if (!doc || !win) return;

    // Ensure head links
    const ensureLink = (id, href) => {
      let link = doc.getElementById(id);
      if (!link) {
        link = doc.createElement('link');
        link.id = id;
        link.rel = 'stylesheet';
        doc.head.appendChild(link);
      }
      link.href = href;
    };

    // Tokens bundle (all themes)
    ensureLink('tokens-bundle', TOKENS_BUNDLED);

    // Element demo styles (for .exampleWrapper, etc.)
    ensureLink('element-demo-styles', ELEMENT_DEMO_STYLES);

    // Theme WCSS bundle for this slug
    const themeHref = getThemeCssUrl(themeSlug);
    if (themeHref) {
      ensureLink('wcss-theme', themeHref);
    }

    // Register auro-header in iframe
    if (!doc.getElementById('auro-header-reg')) {
      const script = doc.createElement('script');
      script.id = 'auro-header-reg';
      script.async = true;
      script.src = AURO_HEADER_SCRIPT;
      doc.head.appendChild(script);
    }

    // Set theme data attribute on body
    doc.body.setAttribute('data-aag-theme', `aag-theme-${themeCode}`);

    // Create a mount node
    let mount = doc.getElementById('mount');
    if (!mount) {
      mount = doc.createElement('div');
      mount.id = 'mount';
      doc.body.appendChild(mount);
    }

    // Render children into iframe with a React root
    if (!rootRef.current) {
      rootRef.current = createRoot(mount);
    }
    rootRef.current.render(<>{children}</>);

    // Auto-resize iframe to fit content
    const resize = () => {
      // Use scrollHeight of body to accommodate shadow content
      iframe.style.height = doc.body.scrollHeight + 'px';
    };
    resize();

    if (!roRef.current) {
      roRef.current = new win.ResizeObserver(resize);
      roRef.current.observe(doc.body);
    }

    return () => {
      // Keep root mounted so switching tabs is fast; cleanup observer
      if (roRef.current) {
        try { roRef.current.disconnect(); } catch (_) {}
        roRef.current = null;
      }
    };
  }, [themeSlug, themeCode, children]);

  // Cleanup effect for component unmount
  useEffect(() => {
    return () => {
      // Unmount React root and cleanup all listeners on component unmount
      if (rootRef.current) {
        try {
          rootRef.current.unmount();
        } catch (_) {}
        rootRef.current = null;
      }
      
      // Disconnect ResizeObserver
      if (roRef.current) {
        try {
          roRef.current.disconnect();
        } catch (_) {}
        roRef.current = null;
      }
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      title={`themed-preview-${themeSlug}`}
      style={{ width: '100%', border: '0'}}
    />
  );
}
