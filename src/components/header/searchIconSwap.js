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
// =============================================================================

export const HOST_ID = 'gcse-search-host';

// Scoped under #gcse-search-host so the swap stays isolated to this header's
// GCS instance and matches the scoped CSS rules in `src/sass/App.scss`.
const SEARCH_BUTTON_SELECTOR = `#${HOST_ID} .gsc-search-button-v2`;

export function swapSearchButtonIcon() {
  const searchButton = document.querySelector(SEARCH_BUTTON_SELECTOR);
  // `data-icon-swapped` is wiped whenever GCS re-renders the button, so checking
  // it is enough to detect both first-run and re-render cases — and is cheaper
  // than a child-element query on every MutationObserver tick.
  if (!searchButton || searchButton.dataset.iconSwapped !== undefined) {
    return;
  }

  const icon = document.createElement('auro-icon');
  icon.setAttribute('category', 'interface');
  icon.setAttribute('name', 'arrow-right');
  icon.setAttribute('customColor', '');
  searchButton.replaceChildren(icon);

  // auro-icon is decorative; restore the button's accessible name after we
  // replace GCS's title/text content.
  searchButton.setAttribute('aria-label', 'Search');

  // Marker the CSS keys off so GCS's original SVG is only hidden once the
  // replacement icon is actually in the DOM — avoids an empty button if this
  // function ever fails to run.
  searchButton.dataset.iconSwapped = '';
}
