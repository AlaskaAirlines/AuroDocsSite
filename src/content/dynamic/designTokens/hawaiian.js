import React, { Component } from "react";
import ThemeTokens from './components/ThemeTokens';
import { hawaiianTokens } from './config/token-mapping';

class HawaiianTokens extends Component {
  render() {
    const { basicTokensMap, advancedTokensMap } = hawaiianTokens;
    
    return (
      <ThemeTokens 
        theme="ha"
        themeName="Hawaiian"
        basicTokensMap={basicTokensMap}
        advancedTokensMap={advancedTokensMap}
      />
    );
  }
}

export default HawaiianTokens;
