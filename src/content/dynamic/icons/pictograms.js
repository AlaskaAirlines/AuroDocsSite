import React, { Component } from "react";
import { Nav } from './nav.js';
import PictogramList from './pictogramList';
import Footer from '~/components/footer';

class Pictograms extends Component {

  render() {
    return (
      <section id="icons" className="auro_baseType">
        <Nav />
        <section className="auro-markdown">
        <auro-header level="1" display="display">Pictograms</auro-header>
        <auro-header level="2" display="600">Overview</auro-header>
        <p className="auro_baseParagraph">Pictograms are larger, illustrative spot graphics used for storytelling rather than UI affordances.</p>
        <p className="auro_baseParagraph">Because they carry their own brand colors, pictograms are not recolored via <code>currentColor</code> the way UI <auro-hyperlink relative href="/icons">icons</auro-hyperlink> are — pick a background-appropriate variant instead of styling color via CSS.</p>
        <PictogramList />
        <Footer />
        </section>
      </section>
    );
  }
}

export default Pictograms;
