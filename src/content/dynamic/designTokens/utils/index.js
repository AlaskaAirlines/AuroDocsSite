/**
 * Extracts token information from a nested object structure.
 * Recursively searches for objects that have both 'name' and 'value' properties.
 * 
 * @param {Object} source - The source object to extract tokens from
 * @param {Array} [initialTokenSet=[]] - Optional initial token set to append to
 * @returns {string} - JSON string of token data ready for auro-tokenlist
 */
export const getTokens = (source, initialTokenSet = []) => {
  // Use the provided array or create a new one if none provided
  const tokenSet = initialTokenSet || [];

  // Check if source is a token object with required properties
  if (source && typeof source === 'object' && 
      source.hasOwnProperty('value') && 
      source.hasOwnProperty('name')) {
    
    tokenSet.push({
      token: source.name,
      version: source.version,
      tokenvalue: source.value,
      reference: source.reference
    });
  }

  // Recursively process object properties
  if (source && typeof source === 'object') {
    for (const key in source) {
      getTokens(source[key], tokenSet);
    }
  }

  return JSON.stringify(tokenSet);
};
