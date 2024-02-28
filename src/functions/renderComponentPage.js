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


    // Common flags for all component pages
    this.name = undefined;
    this.componentName = undefined;
    this.nameSpace = 'aurodesignsystem';
    this.packageName = undefined;
    this.hasCustomElementRegistration = true;
    this.version = undefined;
    this.markdownContentPath = undefined;
    
    // Flags for component nav for inconsistent pages
    this.hasFigma = false;
    this.hasDOT = false;
    this.hasAccessibility = false;

    // Flags for identifiying which page template is being rendered
    this.releasePage = false;
    this.figmaPage = false;
    this.designNotesPath = 'docs/design-notes.md';
    this.figmaPath = 'docs/figma.md';

    /**
     * @private
     */
    this.componentVersion = undefined;

    /**
     * @private
     */
    this.figmaContent = undefined;

    /**
     * @private
     */
    this.designNotesContent = undefined;
  };

  static get properties() {
    return {
      name: {
        type: String
      }
    };
  }

  /**
   * Write the component name to the first tab on the component page navigation menu.
   * @private
   * @returns {void}
   */
  writeComponentName() {
    const elem = document.getElementById('componentLink');

    // only write the component name if the element exists
    // this prevents non-component pages from throwing an error
    if (elem) {
      const tabTitle = this.convertToUpperCase(this.name);

      elem.innerText = tabTitle;
    }
  }

  /**
   * Capitalize the first letter of a string.
   * @private
   * @returns {string} The string with the first letter capitalized.
   */
  convertToUpperCase(str) {
    if(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    } else {
      return str;
    }
  }

  /**
   * Get the name and tagname of the component and from the route.
   * @private
   * @returns {string} The string with the first letter capitalized.
   */
  getName(route) {
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

    // set component name if not set in the component page
    if (!this.componentName) {
      this.componentName = `auro-${this.name}`;
    }
  }


  /**
   * Determine the packageName and version for the component page.
   * @private
   * @returns {void}
   */
  getVersion(route) {
    // set package name if not set in the component page
    if (!this.packageName) {
      this.packageName = `@${this.nameSpace}/auro-${this.name}`;
    }

    // use package version only if not set in the component page
    if (!this.version) {
      this.componentVersion = packageJson.dependencies[this.packageName];

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
  }

  /**
   * Determine the URL for the markdown content.
   * @private
   * @returns {void}
   */
  setMarkdownContent() {
    // set markdown content if not set in the component page
    if (!this.markdownContent) {
      this.markdownContent = `https://raw.githubusercontent.com/AlaskaAirlines/${this.componentName}/${this.componentVersion}/${this.markdownContentPath}`;
    }

    // set figma content if not set in the component page
    if (this.figmaPath) {
      this.figmaContent = `https://raw.githubusercontent.com/AlaskaAirlines/${this.componentName}/${this.componentVersion}/${this.figmaPath}`;
    }

    // set design notes content if not set in the component page
    if (this.designNotesPath) {
      this.designNotesContent = `https://raw.githubusercontent.com/AlaskaAirlines/${this.componentName}/${this.componentVersion}/${this.designNotesPath}`;
    } 
  }

  /**
   * Parse the current route and determine properties for the component page.
   * @private
   * @returns {void}
   */
  parseRoute() {
    let route = window.location.pathname;

    // Determine if the current page is a component page.
    if (route.includes('auro')) {
      // Determine the component name from the route.
      if (!this.name) {
        this.name = route.replace('/components/auro/', '');
      }

      // Determine if the current page is a release page.
      if (route.endsWith('/releases')) {
        this.releasePage = true;
      }

      // Determine if the current page is a figma page.
      if (route.endsWith('/figma')) {
        this.figmaPage = true;
      }

      // Determine if the current page is an accessibility page.
      if (route.endsWith('/a11y')) {
        this.accessibilityPage = true;
      }
    }

    this.getName(route);
    this.getVersion(route);
    this.setMarkdownContent();
  }

  /**
   * Fetch the markdown file and render the content.
   * @param {string} markdown - The path to the markdown file.
   * @param {string} containerSelector - The selector for the container to render the markdown into.
   * @private
   * @returns {void}
   */
  getMarkdownText(markdown, containerSelector) {
    if (!containerSelector) {
      containerSelector = '.auro-markdown';
    }

    this.parseRoute();

    fetch(markdown)
        .then((response) => response.text())
        .then((text) => {
          const rawHtml = marked.parse(text);
          document.querySelector(containerSelector).innerHTML = rawHtml;
          Prism.highlightAll();
        });

    const renderer = new marked.Renderer();
    renderer.link = function(href, title, text) {
      const link = marked.Renderer.prototype.link.call(this, href, title, text);
      let url = href
      url = url.replace(/^.*\/\/[^/]+/, '')

      if (href.includes("auro.alaskaair.com") || href.startsWith('#')) {
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
    
    if (this.hasCustomElementRegistration && !this.releasePage && !this.figmaPage && !this.accessibilityPage) {
      registerCustomComponent(`custom-${this.name}`, `https://cdn.jsdelivr.net/npm/@${this.nameSpace}/auro-${this.name}@${this.componentVersion}/dist/auro-${this.name}__bundled.js`);
    }
  }

  /**
   * Render the correct nav items for the component page
   * @private
   * @returns {object} The component nav items.
   */
  renderNav() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/${this.name}`} activeClassName="is-active" id="componentLink">{this.convertToUpperCase(this.name)}</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/${this.name}/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/${this.name}/api`} activeClassName="is-active">API</NavLink>
        {
          this.hasDOT ?
          <NavLink role="tab" exact className="tab link" to={`/components/auro/${this.name}/dot`} activeClassName="is-active">DoT compliance</NavLink>
          : undefined
        }
        <NavLink role="tab" exact className="tab link" to={`/components/auro/${this.name}/releases`} activeClassName="is-active">Releases</NavLink>
        {
          this.hasFigma ?
            <NavLink role="tab" exact className="tab link" to={`/components/auro/${this.name}/figma`} activeClassName="is-active">Design support</NavLink>
          : undefined
        }
        {
          this.hasAccessibility ?
            <NavLink role="tab" exact className="tab link" to={`/components/auro/hyperlink/a11y`} activeClassName="is-active">Accessibility</NavLink>
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

    if (this.releasePage) {
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
          { this.renderNav() }

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
    } else if (this.figmaPage) {
      return (
        <section className="auro_baseType">

          { this.renderNav() }

          <section
            className="auro-markdown"
            id="figma"
            dangerouslySetInnerHTML={this.getMarkdownText(this.figmaContent, '#figma')}/>

          <section
            className="auro-markdown"
            id="designNotes"
            dangerouslySetInnerHTML={this.getMarkdownText(this.designNotesContent, '#designNotes')}/>
        </section>
      );
    } else {
      return (
        <section className="auro_baseType">

          { this.renderNav() }

          <section
            className="auro-markdown"
            dangerouslySetInnerHTML={this.getMarkdownText(this.markdownContent)}/>
        </section>
      );
    }
  }
}

export default AuroComponentContent;
