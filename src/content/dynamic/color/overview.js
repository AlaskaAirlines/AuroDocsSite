import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';
import markdownOptions from "~/functions/markdownOptions";
import overview from './overview.md'
import { Nav } from './nav.js';
import header from '~/assets/color/header.png';

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

        <img className="util_stackMarginXl--bottom" src={header} alt="page header" />

        <h1 className="auro_heading auro_heading--display">Overview</h1>

        <section className="auro-markdown">
          <ReactMarkdown
            children={this.state.overviewBuild}
            {... markdownOptions}
          />
        </section>
      </section>
    );
  }
}

export default ColorsOverview;
