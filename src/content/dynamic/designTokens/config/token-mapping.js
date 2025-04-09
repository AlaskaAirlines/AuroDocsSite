import alaskaAllTokens from '@aurodesignsystem/design-tokens/dist/alaska/JSObject--allTokens.js';
import alaskaClassicAllTokens from '@aurodesignsystem/design-tokens/dist/alaska-classic/JSObject--allTokens.js';
import hawaiianAllTokens from '@aurodesignsystem/design-tokens/dist/hawaiian/JSObject--allTokens.js';

/**
 * Creates token mappings for a given theme
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
    { title: "Text & Icon", tokens: basic.color.texticon }
  ];

  const fontTokens = [
    { title: "Accent", tokens: basic.text.accent },
    { title: "Body", tokens: basic.text.body },
    { title: "Display", tokens: basic.text.display },
    { title: "Heading", tokens: basic.text.heading }
  ];

  const cornerRadiusTokens = [
    { title: "Corner Radius", tokens: basic.cornerRadius }
  ];

  const basicTokensMap = {
    basicColorTokens,
    fontTokens,
    cornerRadiusTokens
  };

  // Advanced tokens
  const advancedColorTokens = [
    { title: "Accents", tokens: advanced.color.accents },
    { title: "Boolean", tokens: advanced.color.boolean },
    { title: "Button", tokens: advanced.color.button },
    { title: "Hyperlink", tokens: advanced.color.hyperlink },
    { title: "Shared", tokens: advanced.color.shared },
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
export const alaskaTokens = createTokenMappings(alaskaAllTokens);
export const alaskaClassicTokens = createTokenMappings(alaskaClassicAllTokens);
export const hawaiianTokens = createTokenMappings(hawaiianAllTokens);

export default {
  alaska: alaskaTokens,
  alaskaClassic: alaskaClassicTokens,
  hawaiian: hawaiianTokens
};
