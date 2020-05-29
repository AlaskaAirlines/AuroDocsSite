import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import _getTokens from "../../../functions/getTokens"
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../../components/CodeBlock';

const markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/ods-button/master/docs/auro/api.md';

class AuroButtonApi extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contentBuild: null,
    }

    this.flatten = this.flatten.bind(this);
    this.headingRenderer = this.headingRenderer.bind(this);
  };

  componentWillMount() {
    fetch(markdownContent).then((response) => response.text()).then((text) => {
      this.setState({
        contentBuild: text
      })
    })
  }

  flatten(text, child) {
    return typeof child === 'string'
      ? text + child
      : React.Children.toArray(child.props.children).reduce(this.flatten, text)
  }

  headingRenderer(props) {
    var children = React.Children.toArray(props.children)
    var text = children.reduce(this.flatten, '')
    var slug = text.toLowerCase().replace(/\W/g, '-')
    return React.createElement('h' + props.level, {id: slug}, props.children)
  }

  render() {
    return (
      <section className="auro_baseType">

        <div role="tablist" className="ods-tablist tabList">
          <NavLink exact className="tab link" to={`/components/auro/button`} activeClassName="is-active">Button</NavLink>
          <NavLink exact className="tab link" to={`/components/auro/button/install`} activeClassName="is-active">Install</NavLink>
          <NavLink exact className="tab link" to={`/components/auro/button/api`} activeClassName="is-active">API</NavLink>
          <NavLink exact className="tab link" to={`/components/orion/button`} activeClassName="is-active">Legacy</NavLink>
        </div>

        <section className="ods-markdown">
          <ReactMarkdown
            source={this.state.contentBuild}
            escapeHtml={false}
            renderers={{
              code: CodeBlock,
              heading: this.headingRenderer
            }}/>
        </section>
      </section>
    );
  }
}

export default AuroButtonApi;
