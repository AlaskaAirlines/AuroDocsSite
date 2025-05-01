import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorker from './serviceWorker';
import registerCoreComponents from './webcomponents';

window.addEventListener('WebComponentsReady', () => {
  // At this point we are guaranteed that all required polyfills have
  // loaded, and can use web components API's.
  // Only load core components initially, others will be loaded on demand
  return registerCoreComponents();
});

const container = document.getElementById('root')
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. This comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
