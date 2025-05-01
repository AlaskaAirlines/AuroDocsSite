import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
// Import Nav directly to ensure it's not tree-shaken away
import { Nav } from './Nav';
import { FooterLinks } from "./FooterLinks";

/**
 * ThemePage component
 * @param {Object} props - Component props
 * @param {string} props.theme - data-aag-theme to apply (e.g., "ha", "as")
 * @param {React.ReactNode} props.children - Child content to render within the themed section
 * @param {boolean} props.showFooter - Whether to show the footer
 * @param {boolean} props.renderSectionEl - Whether to render content within a section element wrapper
 * @returns {React.ReactElement} Themed section or fragment containing children
 */
const ThemePage = ({ theme, children, showFooter, renderSectionEl }) => {
  const themeProps = {};
  
  if (theme) {
    themeProps['data-aag-theme'] = `aag-theme-${theme}`;
  }
  
  const content = (
    <>
      {/* Use Suspense to handle the case where Nav might load asynchronously */}
      <Suspense fallback={<div>Loading navigation...</div>}>
        <Nav />
      </Suspense>
      {children}
      {showFooter && <FooterLinks />}
    </>
  );
  
  // Optionally return a section element wrapper
  // Necessary for use with renderComponentPage & sticky tabs
  return renderSectionEl ? (
    <section className="auro_baseType" {...themeProps}>
      {content}
    </section>
  ) : content;
};

ThemePage.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.node.isRequired,
  showFooter: PropTypes.bool,
  renderSectionEl: PropTypes.bool
};

// Default props
ThemePage.defaultProps = {
  theme: '',
  showFooter: true,
  renderSectionEl: true
};

export default ThemePage;
