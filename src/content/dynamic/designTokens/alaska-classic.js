import React, { Component } from "react";
import ThemeTokens from './components/ThemeTokens';
import { alaskaClassicTokens } from './config/token-mapping';

class AlaskaClassicTokens extends Component {
  render() {
    const { basicTokensMap, advancedTokensMap } = alaskaClassicTokens;
    
    const introContent = (
      <>
        <p>The Alaska Classic theme uses the v5.x token names with the deprecated Auro Classic values.</p>
        <p>It serves as a gateway to the v5.x tokens, facilitating a smooth transition for Auro components, leading to an eventual switch to the new "Alaska" theme.</p>
      </>
    );
    
    return (
      <ThemeTokens 
        theme="asc"
        themeName="Alaska Classic"
        basicTokensMap={basicTokensMap}
        advancedTokensMap={advancedTokensMap}
        introContent={introContent}
      />
    );
  }
}

export default AlaskaClassicTokens;
