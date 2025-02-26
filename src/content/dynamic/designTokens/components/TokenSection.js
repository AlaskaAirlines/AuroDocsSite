import React from "react";
import { getTokens } from "../utils";

/**
 * TokenSection component that renders token sections with appropriate headings
 * and configurable display options
 * 
 * @param {Object} props - Component props
 * @param {Array} props.tokens - Array of tokens configurations
 * @param {string} [props.headingLevel="h2"] - HTML heading tag to use
 * @param {string} [props.headingClass="auro_heading auro_heading--600"] - CSS class for the heading
 * @param {Object} [props.tokenListProps={}] - Props to pass to the auro-tokenlist component
 * @returns {JSX.Element} - React component
 */
const TokenSection = ({
  tokens,
  headingLevel = "h2",
  headingClass = "auro_heading auro_heading--600",
  tokenListProps = {}
}) => {
  return (
    <>
      {tokens.map(({ title, tokens, props = {} }, index) => {
        // Merge the section-specific props with any global props passed to the component
        const mergedProps = {
          ...tokenListProps,
          ...props
        };

        return (
          <React.Fragment key={index}>
            {React.createElement(
              headingLevel,
              { className: headingClass },
              title
            )}
            <auro-tokenlist 
              componentData={getTokens(tokens, [])} 
              {...mergedProps} 
            />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default TokenSection;
