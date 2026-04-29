import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';
import markdownOptions from "~/functions/markdownOptions";
import overview from './overview.md'
import { Nav } from './nav.js';
import header from '~/assets/color/header.png';
import Footer from '~/components/footer';

class ColorsOverview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      overviewBuild: null
    }
  };

  UNSAFE_componentWillMount() {
    fetch(overview).then((response) => response.text()).then((text) => {
      this.setState({
        overviewBuild: text
      })
    })
  }

  render() {
    return (
      <section className="auro_baseType">
        <Nav />
        <section className="auro-markdown">
          <img className="util_stackMarginXl--bottom" src={header} alt="page header" />
          <h1 className="auro_heading auro_heading--display">Overview</h1>
          <ReactMarkdown
            children={this.state.overviewBuild}
            {... markdownOptions}
          />
          <Footer />
        </section>
      </section>
    );
  }
}

export default ColorsOverview;
