import React, { Component } from "react";
import ThemeTokens from './components/ThemeTokens';
import { AtmosTokens } from './config/token-mapping';

class AlaskaTokens extends Component {
  render() {
    const { basicTokensMap, advancedTokensMap } = AtmosTokens;
    
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
