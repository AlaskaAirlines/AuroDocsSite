import React, { Component } from "react";
import ThemeTokens from './components/ThemeTokens';
import { auro1Tokens } from './config/token-mapping';

class AlaskaTokens extends Component {
  render() {
    const { basicTokensMap, advancedTokensMap } = auro1Tokens;
    
    return (
      <ThemeTokens 
        theme="a1"
        themeName="Atmos"
        basicTokensMap={basicTokensMap}
        advancedTokensMap={advancedTokensMap}
      />
    );
  }
}

export default AlaskaTokens;
