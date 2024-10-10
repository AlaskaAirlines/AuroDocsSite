import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.addEventListener('WebComponentsReady', () => {
  // At this point we are guaranteed that all required polyfills have
  // loaded, and can use web components API's.
  // The standard pattern is to load element definitions that call
  // `customElements.define` here.
  // Note: returning the import's promise causes the custom elements
  // polyfill to wait until all definitions are loaded and then upgrade
  // the document in one batch, for better performance.
  return import('./webcomponents');
});

const container = document.getElementById('root')
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
