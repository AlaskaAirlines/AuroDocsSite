import React, { Component } from "react";
import '../../../sass/markdown.scss';
import ReactMarkdown from 'react-markdown';
import generator from './philosophy.md'

export default class Philosophy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docsGenerator: null
    }
  };

  componentWillMount() {
    fetch(generator).then((response) => response.text()).then((text) => {
      this.setState({
        docsGenerator: text
      })
    })
  }

  render() {
    return (
      <section id="generator">
        <section className="ods-markdown">
          <ReactMarkdown source={this.state.docsGenerator} escapeHtml={false}/>
        </section>
      </section>
    );
  }
}
