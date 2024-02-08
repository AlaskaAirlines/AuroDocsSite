import React from "react";
import marked from 'marked';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { MarkdownPageWrapper } from 'components/markdownPageWrapper';
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";
import { registerCustomComponent } from "content/utils/registerCustomComponent";
import packageJson from './../../package.json';

// Imports for the Release page
import { Query } from '@apollo/react-components';
import { gql } from 'apollo-boost';
import Release from '../content/dynamic/releaseDashboard/releases';

class AuroComponentContent extends MarkdownPageWrapper {

  constructor(props) {
    super(props);

    this.hasFigma = false;
    this.name = undefined;
    this.componentName = undefined;
    this.nameSpace = 'aurodesignsystem';
    this.releasePage = false;
    this.version = undefined;

    /**
     * @private
     */
    this.componentVersion = undefined;
  };

  static get properties() {
    return {
      name: {
        type: String
      }
    };
  }

  writeComponentName() {
    const elem = document.getElementById('componentLink');
    const tabTitle = this.convertToUpperCase(this.name);

    elem.innerText = tabTitle;
  }

  convertToUpperCase(str) {
    if(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    } else {
      return str;
    }
  }

  parseRoute() {
    let route = window.location.pathname;
    
    if (!this.name) {
      this.name = route.replace('/components/auro/', '');
    }

    if (route.endsWith('/releases')) {
      this.releasePage = true;
    }

    let dividerIndex = 0;

    const indexStr = '/auro/';
    const stripToIndex = route.indexOf(indexStr) + indexStr.length;

    route = route.substring(stripToIndex);
    dividerIndex = route.indexOf('/');

    if (dividerIndex > 0) {
      this.name = route.substring(0, dividerIndex);
    } else {
      this.name = route;
    }

    const packageName = `@${this.nameSpace}/auro-${this.name}`;

    // use package version only if not set in the component page
    if (!this.version) {
      this.componentVersion = packageJson.dependencies[packageName];

      // replace leading caret with `v` if present
      if (this.componentVersion.charAt(0) === '^') {
        this.componentVersion = `v${this.componentVersion.substring(1)}`;
      }

      // remove leading caret if present
      const char0 = this.componentVersion.charAt(0);
      if (char0 === '^' || char0 === 'v') {
        this.version = this.componentVersion.substring(1);
      } else {
        this.version = this.componentVersion;
      }
    } else {
      this.componentVersion = `v${this.version}`;
    }

    // set component name if not set in the component page
    if (!this.componentName) {
      this.componentName = `auro-${this.name}`;
    }

    // set markdown content if not set in the component page
    this.markdownContent = `https://raw.githubusercontent.com/AlaskaAirlines/${this.componentName}/${this.componentVersion}/${this.markdownContentPath}`;
  }

  // function to get text from MD document
  getMarkdownText() {
    this.parseRoute();

    fetch(this.markdownContent)
        .then((response) => response.text())
        .then((text) => {
          const rawHtml = marked.parse(text);
          document.querySelector('.auro-markdown').innerHTML = rawHtml;
          Prism.highlightAll();
        });

    const renderer = new marked.Renderer();
    renderer.link = function(href, title, text) {
      const link = marked.Renderer.prototype.link.call(this, href, title, text);
      let url = href
      url = url.replace(/^.*\/\/[^/]+/, '')

      if (href.includes("auro.alaskaair.com")) {

        return link.replace(`href`,`href="${url}"`);
      } else {

        const newLink = `<a href="${href}"  rel="noopener noreferrer" target="_blank" className="externalLink">${text} <auro-icon customColor category="interface" name="external-link-md"></auro-icon></a>`

        return newLink;
      }
    };

    marked.setOptions({
        renderer: renderer
    });
  }

  componentDidMount() {
    if (!this.releasePage) {
      this.writeComponentName();
    }

    try {
      registerCustomComponent(`custom-${this.name}`, `https://cdn.jsdelivr.net/npm/@${this.nameSpace}/auro-${this.name}@${this.componentVersion}/dist/auro-${this.name}__bundled.js`);
    } catch (err) {
      console.error(`Failed to register component with custom name: ${err}`);
    }
  }

  getNavHtml() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/${this.name}`} activeClassName="is-active" id="componentLink">{this.convertToUpperCase(this.name)}</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/${this.name}/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/${this.name}/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/${this.name}/releases`} activeClassName="is-active">Releases</NavLink>
        {
          this.hasFigma ?
            <NavLink role="tab" exact className="tab link" to={`/components/auro/${this.name}/figma`} activeClassName="is-active">Design support</NavLink>
          : undefined
        }

        <LinkIcons
          github={`https://github.com/AlaskaAirlines/auro-${this.name}/issues`}
          npm={`https://www.npmjs.com/package/@${this.nameSpace}/auro-${this.name}`}
          code={`https://github.com/AlaskaAirlines/auro-${this.name}/blob/master/src/auro-${this.name}.js`}
        />
      </div>
    );
  }

  render() {
    if (!this.name) {
      this.parseRoute();
    }

    if (!this.releasePage) {
      return (
        <section className="auro_baseType">

          { this.getNavHtml() }

          <section
            className="auro-markdown"
            dangerouslySetInnerHTML={this.getMarkdownText()}
          />
        </section>
      );
    } else {
      const RELEASES = gql`
      {
        organization(login: "AlaskaAirlines") {
          team(slug: "auro-team") {
            repositories(first: 1, orderBy: {field: NAME, direction: ASC}, query: "auro-alert") {
              nodes {
                name
                releases(first: 20, orderBy: {field: CREATED_AT, direction: DESC}) {
                  nodes {
                    name
                    updatedAt
                    description
                  }
                }
              }
            }
          }
        }
      }
      `

      return (
        <section id="releases">
          { this.getNavHtml() }

          <h1 className="auro_heading auro_heading--display">Releases</h1>
          <p>The following is a list of all Auro element releases.</p>

          <Query query={RELEASES}>
            {({ loading, error, data }) => {
              if (loading) return <auro-loader laser onlight></auro-loader>;
              if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

              return data.organization.team.repositories.nodes.map(({ name, releases }) => (
                releases.nodes.length > 0
                  ? <Release key={name} name={name} releases={releases.nodes} />
                  : ''
              ));
            }}
          </Query>
        </section>
      );
    }
  }
}

export default AuroComponentContent;
