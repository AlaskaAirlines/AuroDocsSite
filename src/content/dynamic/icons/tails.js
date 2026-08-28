import React, { Component } from "react";
import { Nav } from './nav.js';
import TailList from './tailList';
import Footer from '~/components/footer';

class Tails extends Component {

  render() {
    return (
      <section id="icons" className="auro_baseType">
        <Nav />
        <section className="auro-markdown">
        <auro-header level="1" display="display">Tails</auro-header>
        <auro-header level="2" display="600">Overview</auro-header>
        <p className="auro_baseParagraph">Tails are the airline tail-fin marks for Alaska and its partner airlines. Use them to represent an operating or partner carrier.</p>
        <p className="auro_baseParagraph">Because they are branded, full-color marks, tails are not recolored via <code>currentColor</code> the way UI <auro-hyperlink relative href="/icons">icons</auro-hyperlink> are.</p>
        <TailList />
        <Footer />
        </section>
      </section>
    );
  }
}

export default Tails;
