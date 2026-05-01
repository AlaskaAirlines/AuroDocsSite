import { MarkdownPageWrapper } from '~/components/markdownPageWrapper';
import LinkIcons from '~/components/linkIcons';
import { NavLink } from "react-router-dom";
import { registerCustomComponent } from "~/content/utils/registerCustomComponent";
import packageJson from 'ROOT/package.json';
import Query from '~/functions/renderQuery'
import RenderRemoteMarkdown from '~/functions/renderRemoteMarkdown';

// Imports for the Release page
import Release from '~/content/dynamic/releaseDashboard/releases';
import { gql } from '@apollo/client';


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
    this.hasGettingStarted = false;
    this.hasDesign = false;
    this.hasAccessibility = false;
    this.hasVoiceover = false;
    this.hasKeyboardBehavior = false;
    this.hasApi = true;
    this.hasInstall  = true;
    this.hasSubNav = false;

    // Flags for identifying which page template is being rendered
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
      this.componentName = `auro-formkit`;
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
      this.packageName = `@${this.nameSpace}/auro-formkit`;
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
      this.markdownContent = `https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-formkit@${this.componentVersion}/${this.markdownContentPath}/+esm`;
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

      // Determine if the current page is an accessibility page.
      if (route.endsWith('/a11y')) {
        this.accessibilityPage = true;
      }
    }

    this.getName(route);
    this.getVersion(route);
    this.setMarkdownContent();
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
    if (this.hasSubNav) {
      return this.renderGroupedNav();
    }

    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" end className="tab link" to={`/components/auro/${this.name}`}  id="componentLink">{this.convertToUpperCase(this.name)}</NavLink>
        {
          this.hasGettingStarted ?
          <NavLink role="tab" end className="tab link" to={`/components/auro/${this.name}/getting-started`} >Getting Started</NavLink>
          : undefined
        }
        {
          this.hasCustomize ?
          <NavLink role="tab" end className="tab link" to={`/components/auro/${this.name}/customize`} >Customize</NavLink>
          : undefined
        }
        {
          this.hasDesign ?
          <NavLink role="tab" end className="tab link" to={`/components/auro/${this.name}/design`} >Design</NavLink>
          : undefined
        }
        {
          this.hasKeyboardBehavior ?
            <NavLink role="tab" end className="tab link" to={`/components/auro/${this.name}/keyboard-behavior`} >Keyboard Behavior</NavLink>
          : undefined
        }
        {
          this.hasAccessibility ?
            <NavLink role="tab" end className="tab link" to={`/components/auro/${this.name}/accessibility`} >A11Y</NavLink>
          : undefined
        }
        {
          this.hasVoiceover ?
            <NavLink role="tab" end className="tab link" to={`/components/auro/${this.name}/voice-over`} >VoiceOver</NavLink>
          : undefined
        }
        {
          this.hasApi ?
          <NavLink role="tab" end className="tab link" to={`/components/auro/${this.name}/api`} >API</NavLink>
          : undefined
        }
        {
          this.hasInstall ?
          <NavLink role="tab" end className="tab link" to={`/components/auro/${this.name}/install`} >Readme</NavLink>
          : undefined
        }
        <NavLink role="tab" end className="tab link" to={`/components/auro/${this.name}/releases`} >Releases</NavLink>

        <LinkIcons
          github={`https://github.com/AlaskaAirlines/auro-formkit/issues`}
          npm={`https://www.npmjs.com/package/@${this.nameSpace}/auro-formkit`}
          code={`https://github.com/AlaskaAirlines/auro-formkit/blob/main/components/${this.name}/src/auro-${this.name}.js`}
        />
      </div>
    );
  }

  /**
   * Render grouped nav with primary tabs and contextual sub-tabs.
   * @private
   * @returns {object} The grouped component nav items.
   */
  renderGroupedNav() {
    const basePath = `/components/auro/${this.name}`;
    const path = window.location.pathname;

    const codeRoutes = [`${basePath}/getting-started`, `${basePath}/customize`, `${basePath}/api`];
    const a11yRoutes = [`${basePath}/keyboard-behavior`, `${basePath}/voice-over`, `${basePath}/accessibility`];

    const isCodeSection = codeRoutes.includes(path);
    const isA11ySection = a11yRoutes.includes(path);

    return (
      <div>
        <div role="tablist" className="tabList">
          <NavLink role="tab" end className="tab link" to={basePath}>Overview</NavLink>
          <NavLink
            role="tab"
            className={() => `tab link ${isCodeSection ? 'active' : ''}`}
            to={`${basePath}/getting-started`}
          >Code</NavLink>
          <NavLink role="tab" end className="tab link" to={`${basePath}/design`}>Design</NavLink>
          <NavLink
            role="tab"
            className={() => `tab link ${isA11ySection ? 'active' : ''}`}
            to={`${basePath}/keyboard-behavior`}
          >Accessibility</NavLink>
          <NavLink role="tab" end className="tab link" to={`${basePath}/releases`}>Releases</NavLink>

          <LinkIcons
            github={`https://github.com/AlaskaAirlines/auro-formkit/issues`}
            npm={`https://www.npmjs.com/package/@${this.nameSpace}/auro-formkit`}
            code={`https://github.com/AlaskaAirlines/auro-formkit/blob/main/components/${this.name}/src/auro-${this.name}.js`}
          />
        </div>

        {isCodeSection && (
          <div role="tablist" className="tabList subTabList">
            <NavLink role="tab" end className="tab link" to={`${basePath}/getting-started`}>Getting Started</NavLink>
            <NavLink role="tab" end className="tab link" to={`${basePath}/customize`}>Customize</NavLink>
            <NavLink role="tab" end className="tab link" to={`${basePath}/api`}>API</NavLink>
          </div>
        )}

        {isA11ySection && (
          <div role="tablist" className="tabList subTabList">
            <NavLink role="tab" end className="tab link" to={`${basePath}/keyboard-behavior`}>Keyboard Behavior</NavLink>
            <NavLink role="tab" end className="tab link" to={`${basePath}/voice-over`}>VoiceOver</NavLink>
            <NavLink role="tab" end className="tab link" to={`${basePath}/accessibility`}>Aria</NavLink>
          </div>
        )}
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
            repositories(first: 1, orderBy: {field: NAME, direction: ASC}, query: "${this.componentName}") {
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
    `;

      return (
        <section id="releases">
          { this.renderNav() }

          <h1 className="auro_heading auro_heading--display">Releases</h1>
          <p>The following is a list of all Auro element releases.</p>

          <Query query={RELEASES}>
            {({loading, error, data}) => {

              if (loading) return <auro-loader laser onlight></auro-loader>;
              if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;
  
              return data.organization.team.repositories.nodes.map(({ name, releases }, index) => (
                releases.nodes.length > 0
                  ? <Release key={index + '_' + name} name={name} releases={releases.nodes} />
                  : ''
              ))
            }}
          </Query>

        </section>
      );
    } else {
      return (
        <section className="auro_baseType">

          { this.renderNav() }

          <section className="auro-markdown">
            <RenderRemoteMarkdown markdownUrl={this.markdownContent} />
          </section>
        </section>
      );
    }
  }
}

export default AuroComponentContent;
