// Active themes render from the up-to-date `dist/web` token output.
import alaskaAllTokens from '@aurodesignsystem/design-tokens/dist/web/JSObject--allTokens--alaska.js';
import hawaiianAllTokens from '@aurodesignsystem/design-tokens/dist/web/JSObject--allTokens--hawaiian.js';
import AtmosAllTokens from '@aurodesignsystem/design-tokens/dist/web/JSObject--allTokens--atmos.js';
// Alaska Classic has no `dist/web` output, so it continues to read from `dist/themes`.
import alaskaClassicAllTokens from '@aurodesignsystem/design-tokens/dist/themes/alaska-classic/JSObject--allTokens.js';

/**
 * Removes any section whose token group is missing or empty so the page
 * never renders a heading with no tokens beneath it.
 * @param {Array} sections Array of `{ title, tokens }` section definitions
 * @returns {Array} Only the sections that actually contain tokens
 */
const withTokens = (sections) =>
  sections.filter(({ tokens }) => tokens && Object.keys(tokens).length > 0);

/**
 * Picks the entries of a flat token object whose keys start with `prefix`.
 * The `dist/web` output stores `basic.type` as a flat, kebab-cased map
 * (e.g. `family-body`, `weight-heading`) rather than the nested groups the
 * legacy `dist/themes` output used, so we regroup it here for display.
 * @param {Object} obj Flat token object
 * @param {string} prefix Key prefix identifying the group
 * @returns {Object} Subset of `obj` whose keys begin with `prefix`
 */
const pickByPrefix = (obj, prefix) =>
  Object.fromEntries(
    Object.entries(obj || {}).filter(([key]) => key.startsWith(prefix))
  );

/**
 * Creates token mappings for a `dist/web` theme.
 * `dist/web` uses kebab-cased keys, a flat `basic.type` map, and includes
 * additional advanced color groups (expanded, header, interactive, switch).
 * @param {Object} theme The theme tokens object containing basic and advanced tokens
 * @returns {Object} Organized token mappings for the theme
 */
const createWebTokenMappings = (theme) => {
  const { basic, advanced } = theme;

  // Basic tokens
  const basicColorTokens = withTokens([
    { title: "Border", tokens: basic.color.border },
    { title: "Brand", tokens: basic.color.brand },
    { title: "Fare Brand", tokens: basic.color.fare },
    { title: "Page Background", tokens: basic.color["page-background"] },
    { title: "Status", tokens: basic.color.status },
    { title: "Surface", tokens: basic.color.surface },
    { title: "Text & Icon", tokens: basic.color.texticon },
    { title: "Tier Program", tokens: basic.color["tier-program"] }
  ]);

  const typeTokens = withTokens([
    { title: "Brand", tokens: pickByPrefix(basic.type, "brand-") },
    { title: "Family", tokens: pickByPrefix(basic.type, "family-") },
    { title: "Letter Spacing", tokens: pickByPrefix(basic.type, "letter-spacing-") },
    { title: "Line Height", tokens: pickByPrefix(basic.type, "line-height-") },
    { title: "Weight", tokens: pickByPrefix(basic.type, "weight-") }
  ]);

  const basicTokensMap = {
    basicColorTokens,
    typeTokens
  };

  // Advanced tokens
  const advancedColorTokens = withTokens([
    { title: "Accents", tokens: advanced.color.accents },
    { title: "Avatar", tokens: advanced.color.avatar },
    { title: "Boolean", tokens: advanced.color.boolean },
    { title: "Button", tokens: advanced.color.button },
    { title: "Dropdown Emphasized", tokens: advanced.color["dropdown-emphasized"] },
    { title: "Expanded", tokens: advanced.color.expanded },
    { title: "Flightline", tokens: advanced.color.flightline },
    { title: "Footer", tokens: advanced.color.footer },
    { title: "Header", tokens: advanced.color.header },
    { title: "Hyperlink", tokens: advanced.color.hyperlink },
    { title: "Interactive", tokens: advanced.color.interactive },
    { title: "Shared", tokens: advanced.color.shared },
    { title: "Skeleton", tokens: advanced.color.skeleton },
    { title: "State", tokens: advanced.color.state },
    { title: "Switch", tokens: advanced.color.switch }
  ]);

  const advancedTokensMap = {
    advancedColorTokens
  };

  return {
    basicTokensMap,
    advancedTokensMap
  };
};

/**
 * Creates token mappings for a legacy `dist/themes` theme.
 * `dist/themes` uses camel-cased keys and nested `basic.type` groups.
 * Retained for Alaska Classic, which has no `dist/web` output.
 * @param {Object} theme The theme tokens object containing basic and advanced tokens
 * @returns {Object} Organized token mappings for the theme
 */
const createTokenMappings = (theme) => {
  const { basic, advanced } = theme;

  // Basic tokens
  const basicColorTokens = [
    { title: "Border", tokens: basic.color.border },
    { title: "Brand", tokens: basic.color.brand },
    { title: "Fare Brand", tokens: basic.color.fare },
    { title: "Page Background", tokens: basic.color.pageBackground },
    { title: "Status", tokens: basic.color.status },
    { title: "Surface", tokens: basic.color.surface },
    { title: "Text & Icon", tokens: basic.color.texticon },
    { title: "Tier Program", tokens: basic.color.tierProgram }
  ];

  const typeTokens = [
    { title: "Brand", tokens: basic.type.brand },
    { title: "Family", tokens: basic.type.family },
    { title: "Letter Spacing", tokens: basic.type.letterSpacing },
    { title: "Line Height", tokens: basic.type.lineHeight },
    { title: "Weight", tokens: basic.type.weight }
  ];

  const basicTokensMap = {
    basicColorTokens,
    typeTokens
  };

  // Advanced tokens
  const advancedColorTokens = [
    { title: "Accents", tokens: advanced.color.accents },
    { title: "Avatar", tokens: advanced.color.avatar },
    { title: "Boolean", tokens: advanced.color.boolean },
    { title: "Button", tokens: advanced.color.button },
    { title: "Dropdown Emphasized", tokens: advanced.color.dropdownEmphasized },
    { title: "Flightline", tokens: advanced.color.flightline },
    { title: "Footer", tokens: advanced.color.footer },
    { title: "Hyperlink", tokens: advanced.color.hyperlink },
    { title: "Shared", tokens: advanced.color.shared },
    { title: "Skeleton", tokens: advanced.color.skeleton },
    { title: "State", tokens: advanced.color.state }
  ];

  const advancedTokensMap = {
    advancedColorTokens
  };

  return {
    basicTokensMap,
    advancedTokensMap
  };
};

// Create token mappings for each theme
export const alaskaTokens = createWebTokenMappings(alaskaAllTokens);
export const hawaiianTokens = createWebTokenMappings(hawaiianAllTokens);
export const AtmosTokens = createWebTokenMappings(AtmosAllTokens);
export const alaskaClassicTokens = createTokenMappings(alaskaClassicAllTokens);

export default {
  alaska: alaskaTokens,
  alaskaClassic: alaskaClassicTokens,
  hawaiian: hawaiianTokens,
  atmos: AtmosTokens
};
