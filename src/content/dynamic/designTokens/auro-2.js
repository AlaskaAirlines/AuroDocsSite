import React, { Component } from "react";
import ThemeTokens from './components/ThemeTokens';
import { auro2Tokens } from './config/token-mapping';

class AlaskaTokens extends Component {
  render() {
    const { basicTokensMap, advancedTokensMap } = auro2Tokens;
    
    return (
      <ThemeTokens 
        theme="a2"
        themeName="Auro 2"
        basicTokensMap={basicTokensMap}
        advancedTokensMap={advancedTokensMap}
      />
    );
  }
}

export default AlaskaTokens;
