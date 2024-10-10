import RenderMarkdownPage from "~/functions/renderMarkdownPage";
import { NavLink } from "react-router-dom";

class AuroContent extends RenderMarkdownPage {
  render() {
    return (
      <section className="auro_baseType">
        <div role="tablist" className="tabList">
          <NavLink role="tab" exact className="tab link" to={`/css/conventions`} activeclassname="is-active">CSS conventions</NavLink>
          <NavLink role="tab" exact className="tab link" to={`/css/custom-element-css`} activeclassname="is-active">CSS & custom elements</NavLink>
          <NavLink role="tab" exact className="tab link" to={`/css/guidelines`} activeclassname="is-active">Style guidelines</NavLink>
          <NavLink role="tab" exact className="tab link" to={`/css/idiomatic-css`} activeclassname="is-active">Idiomatic CSS</NavLink>
        </div>
        <section
          className="auro-markdown"
          dangerouslySetInnerHTML={this.getMarkdownText()}
        />
      </section>
    );
  }
}

export default AuroContent;
