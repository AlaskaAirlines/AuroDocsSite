import React from "react";
import ThemePage from './ThemePage';
import TokenSection from "./TokenSection";
import AdvancedTokensNotice from "./AdvancedTokensNotice";
import BasicTokensNotice from "./BasicTokensNotice";
import VersionChecker from './VersionChecker';

const ThemeTokens = ({ theme, themeName, basicTokensMap, advancedTokensMap, introContent }) => {
  const { basicColorTokens, typeTokens } = basicTokensMap;
  const { advancedColorTokens } = advancedTokensMap;
  
  return (
    <ThemePage theme={theme}>
      <h1 className="auro_heading auro_heading--display">{themeName} Design Tokens</h1>

      <VersionChecker />

      {/* Display intro content if provided */}
      {introContent && <div className="theme-intro">{introContent}</div>}

      <h2 className="auro_heading auro_heading--600">Basic Tokens</h2>
      <BasicTokensNotice />

      <h3 className="auro_heading auro_heading--600">Colors</h3>
      <TokenSection 
        tokens={basicColorTokens}
        headingLevel="h4"
        headingClass="auro_heading auro_heading--400"
        tokenListProps={{
          swatchType: "rectangle",
          swatch: true
        }}
      />

      <h3 className="auro_heading auro_heading--600">Type</h3>
      <TokenSection 
        tokens={typeTokens}
        headingLevel="h4"
        headingClass="auro_heading auro_heading--400"
      />

      <h2 className="auro_heading auro_heading--600">Advanced Tokens</h2>
      <AdvancedTokensNotice />
      
      <h3 className="auro_heading auro_heading--500">Advanced Colors</h3>
      <TokenSection 
        tokens={advancedColorTokens}
        headingLevel="h4"
        headingClass="auro_heading auro_heading--400"
        tokenListProps={{
          swatchType: "rectangle",
          swatch: true
        }}
      />
    </ThemePage>
  );
};

export default ThemeTokens;
