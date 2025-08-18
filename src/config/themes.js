/**
 * Centralized theme configuration
 * Maps theme slugs to their display names, codes, and CSS URLs
 */

export const CDN_URL = 'https://cdn.jsdelivr.net/npm/@aurodesignsystem';
const WCSS_THEME_PATH = `${CDN_URL}/webcorestylesheets@latest/dist/bundled/themes`;

/**
 * Theme configuration object
 * @typedef {Object} Theme
 * @property {string} slug - URL-friendly theme identifier
 * @property {string} displayName - Human-readable theme name for UI
 * @property {string} code - Theme code used in data-aag-theme attributes
 * @property {string} cssUrl - URL to the theme's global CSS bundle
 */

/**
 * @type {Theme[]}
 */
export const THEMES = [
  {
    slug: 'alaska',
    displayName: 'Alaska',
    code: 'as',
    cssUrl: `${WCSS_THEME_PATH}/alaska.global.min.css`
  },
  {
    slug: 'alaska-classic',
    displayName: 'Alaska Classic',
    code: 'asc',
    cssUrl: `${WCSS_THEME_PATH}/alaska-classic.global.min.css`
  },
  {
    slug: 'hawaiian',
    displayName: 'Hawaiian',
    code: 'ha',
    cssUrl: `${WCSS_THEME_PATH}/hawaiian.global.min.css`
  },
  {
    slug: 'auro-1',
    displayName: 'Auro 1',
    code: 'a1',
    cssUrl: `${WCSS_THEME_PATH}/auro-1.global.min.css`
  },
  {
    slug: 'auro-2',
    displayName: 'Auro 2',
    code: 'a2',
    cssUrl: `${WCSS_THEME_PATH}/auro-2.global.min.css`
  }
];

/**
 * Maps theme slugs to theme codes
 * @type {Object<string, string>}
 */
export const THEME_CODE_MAP = THEMES.reduce((map, theme) => {
  map[theme.slug] = theme.code;
  return map;
}, {});

/**
 * Maps theme slugs to CSS URLs
 * @type {Object<string, string>}
 */
export const THEME_CSS_URL_MAP = THEMES.reduce((map, theme) => {
  map[theme.slug] = theme.cssUrl;
  return map;
}, {});

/**
 * Get theme configuration by slug
 * @param {string} slug - Theme slug
 * @returns {Theme|undefined} Theme configuration or undefined if not found
 */
export const getThemeBySlug = (slug) => {
  return THEMES.find(theme => theme.slug === slug);
};

/**
 * Get theme code by slug
 * @param {string} slug - Theme slug
 * @returns {string|undefined} Theme code or undefined if not found
 */
export const getThemeCode = (slug) => {
  return THEME_CODE_MAP[slug];
};

/**
 * Get theme CSS URL by slug
 * @param {string} slug - Theme slug
 * @returns {string|undefined} CSS URL or undefined if not found
 */
export const getThemeCssUrl = (slug) => {
  return THEME_CSS_URL_MAP[slug];
};

/**
 * Default theme slug
 */
export const DEFAULT_THEME_SLUG = 'alaska';
