import RenderMarkdownPage from "~/functions/renderComponentPage";
import { NavLink } from "react-router-dom";
import LinkIcons from './../components/linkIcons';
import packageJson from 'ROOT/package.json';

class AuroContent extends RenderMarkdownPage {
  constructor(props) {
    super(props);

    this.nameSpace = 'alaskaairux';
    this.componentName = 'icons';
    this.packageName = '@alaskaairux/icons';
    this.hasCustomElementRegistration = false;
  };

  showVersion() {
    const dependencies = packageJson.dependencies['@alaskaairux/icons'];
    return `@alaskaairux/icons: ${dependencies}`;
  };

  renderNav() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/icons`} activeclassname="is-active">Icons</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/icons/guidelines`} activeclassname="is-active">Design guidelines</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/icons/install`} activeclassname="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/icons/ways-to-use`} activeclassname="is-active">Ways to use</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/deprecated-icons`} activeclassname="is-active">Deprecated Icons</NavLink>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/Icons/issues"
          npm="https://www.npmjs.com/package/@alaskaairux/icons"
          code="https://github.com/AlaskaAirlines/Icons/tree/master/src/icons"
          version={this.showVersion()}
        />
      </div>
    );
  }
}

export default AuroContent;
