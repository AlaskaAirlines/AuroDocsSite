// All Auro web components need to be listed here to be packaged properly for IE11 support
// This file uses dynamic imports to enable proper tree-shaking

// Import essential components directly to make them available globally
import '@aurodesignsystem/auro-accordion';
import '@aurodesignsystem/auro-alert';
import '@aurodesignsystem/auro-button';
import '@aurodesignsystem/auro-hyperlink';
import '@alaskaairux/icons';

// Only import components based on current route or component needs
export function loadAuroComponents(components) {
  const importPromises = [];
  
  if (components.includes('accordion')) {
    importPromises.push(import('@aurodesignsystem/auro-accordion'));
  }
  if (components.includes('alert')) {
    importPromises.push(import('@aurodesignsystem/auro-alert'));
  }
  if (components.includes('avatar')) {
    importPromises.push(import('@aurodesignsystem/auro-avatar'));
  }
  if (components.includes('background')) {
    importPromises.push(import('@aurodesignsystem/auro-background'));
  }
  if (components.includes('backtotop')) {
    importPromises.push(import('@aurodesignsystem/auro-backtotop'));
  }
  if (components.includes('badge')) {
    importPromises.push(import('@aurodesignsystem/auro-badge'));
  }
  if (components.includes('banner')) {
    importPromises.push(import('@aurodesignsystem/auro-banner'));
  }
  if (components.includes('button')) {
    importPromises.push(import('@aurodesignsystem/auro-button'));
  }
  if (components.includes('card')) {
    importPromises.push(import('@aurodesignsystem/auro-card'));
  }
  if (components.includes('carousel')) {
    importPromises.push(import('@aurodesignsystem/auro-carousel'));
  }
  if (components.includes('datetime')) {
    importPromises.push(import('@aurodesignsystem/auro-datetime'));
  }
  if (components.includes('dialog')) {
    importPromises.push(import('@aurodesignsystem/auro-dialog'));
  }
  if (components.includes('drawer')) {
    importPromises.push(import('@aurodesignsystem/auro-drawer'));
  }
  if (components.includes('flight')) {
    importPromises.push(import('@aurodesignsystem/auro-flight'));
  }
  if (components.includes('flightline')) {
    importPromises.push(import('@aurodesignsystem/auro-flightline'));
  }
  if (components.includes('hyperlink')) {
    importPromises.push(import('@aurodesignsystem/auro-hyperlink'));
  }
  if (components.includes('icon')) {
    importPromises.push(import('@aurodesignsystem/auro-icon'));
  }
  if (components.includes('alaska-icon')) {
    importPromises.push(import('@aurodesignsystem/auro-icon/src/auro-alaska'));
  }
  if (components.includes('loader')) {
    importPromises.push(import('@aurodesignsystem/auro-loader'));
  }
  if (components.includes('lockup')) {
    importPromises.push(import('@aurodesignsystem/auro-lockup'));
  }
  if (components.includes('nav')) {
    importPromises.push(import('@aurodesignsystem/auro-nav'));
  }
  if (components.includes('pane')) {
    importPromises.push(import('@aurodesignsystem/auro-pane'));
  }
  if (components.includes('popover')) {
    importPromises.push(import('@aurodesignsystem/auro-popover'));
  }
  if (components.includes('sidenav')) {
    importPromises.push(import('@aurodesignsystem/auro-sidenav'));
  }
  if (components.includes('skeleton')) {
    importPromises.push(import('@aurodesignsystem/auro-skeleton'));
  }
  if (components.includes('table')) {
    importPromises.push(import('@aurodesignsystem/auro-table'));
  }
  if (components.includes('toast')) {
    importPromises.push(import('@aurodesignsystem/auro-toast'));
  }
  if (components.includes('tokenlist')) {
    importPromises.push(import('@aurodesignsystem/auro-tokenlist'));
  }
  
  return Promise.all(importPromises);
}

// Load all required components on initial page load
export default function registerCoreComponents() {
  return Promise.resolve(); // We're already importing the core components directly
}
