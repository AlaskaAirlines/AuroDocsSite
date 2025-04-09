import React, { Component } from "react";
import ThemeTokens from './components/ThemeTokens';
import { alaskaTokens } from './config/token-mapping';

class AlaskaTokens extends Component {
  render() {
    const { basicTokensMap, advancedTokensMap } = alaskaTokens;
    
    return (
      <ThemeTokens 
        theme="as"
        themeName="Alaska"
        basicTokensMap={basicTokensMap}
        advancedTokensMap={advancedTokensMap}
      />
    );
  }
}

export default AlaskaTokens;
