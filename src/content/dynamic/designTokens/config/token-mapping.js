import alaskaAllTokens from '@aurodesignsystem/design-tokens/dist/themes/alaska/JSObject--allTokens.js';
import alaskaClassicAllTokens from '@aurodesignsystem/design-tokens/dist/themes/alaska-classic/JSObject--allTokens.js';
import hawaiianAllTokens from '@aurodesignsystem/design-tokens/dist/themes/hawaiian/JSObject--allTokens.js';
import auro1AllTokens from '@aurodesignsystem/design-tokens/dist/themes/auro-1/JSObject--allTokens.js';
import auro2AllTokens from '@aurodesignsystem/design-tokens/dist/themes/auro-2/JSObject--allTokens.js';

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
    { title: "Expanded Widget", tokens: advanced.color.expandedWidget },
    { title: "Flightline", tokens: advanced.color.flightline },
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
export const alaskaTokens = createTokenMappings(alaskaAllTokens);
export const alaskaClassicTokens = createTokenMappings(alaskaClassicAllTokens);
export const hawaiianTokens = createTokenMappings(hawaiianAllTokens);
export const auro1Tokens = createTokenMappings(auro1AllTokens);
export const auro2Tokens = createTokenMappings(auro2AllTokens);

export default {
  alaska: alaskaTokens,
  alaskaClassic: alaskaClassicTokens,
  hawaiian: hawaiianTokens,
  auro1: auro1Tokens,
  auro2: auro2Tokens
};
