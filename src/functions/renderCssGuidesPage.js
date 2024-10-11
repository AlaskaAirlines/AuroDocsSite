import RenderMarkdownPage from "~/functions/renderMarkdownPage";
import { NavLink } from "react-router-dom";

class AuroContent extends RenderMarkdownPage {
  render() {
    return (
      <section className="auro_baseType">
        <div role="tablist" className="tabList">
          <NavLink role="tab" end className="tab link" to={`/css/conventions`} >CSS conventions</NavLink>
          <NavLink role="tab" end className="tab link" to={`/css/custom-element-css`} >CSS & custom elements</NavLink>
          <NavLink role="tab" end className="tab link" to={`/css/guidelines`} >Style guidelines</NavLink>
          <NavLink role="tab" end className="tab link" to={`/css/idiomatic-css`} >Idiomatic CSS</NavLink>
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
