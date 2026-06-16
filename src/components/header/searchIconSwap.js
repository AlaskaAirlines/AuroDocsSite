// =============================================================================
// Search button icon swap
// -----------------------------------------------------------------------------
// Google Custom Search (GCS) renders a magnifier SVG inside the search submit
// button, which is redundant with the magnifier shown inside the input itself.
// We replace it with the Auro `arrow-right` icon to read as "submit" instead.
//
// Because we don't own the GCS markup, the swap must run after GCS hydrates the
// button and re-run whenever GCS re-renders it. The caller is responsible for
// invoking `swapSearchButtonIcon` on mount and from a MutationObserver.
//
// To revert this behavior, delete this file, remove the import + call from
// `src/components/header/index.js`, and delete the matching
// `.gsc-search-button-v2 svg { display: none }` rule in `src/sass/App.scss`.
// =============================================================================

const SEARCH_BUTTON_SELECTOR = '.gsc-search-button-v2';

export function swapSearchButtonIcon() {
  const searchButton = document.querySelector(SEARCH_BUTTON_SELECTOR);
  if (!searchButton || searchButton.querySelector('auro-icon')) {
    return;
  }

  while (searchButton.firstChild) {
    searchButton.removeChild(searchButton.firstChild);
  }

  const icon = document.createElement('auro-icon');
  icon.setAttribute('category', 'interface');
  icon.setAttribute('name', 'arrow-right');
  icon.setAttribute('customColor', '');
  searchButton.appendChild(icon);
}
