import RenderMarkdownPage from "functions/renderMarkdownPage";
import { NavLink } from "react-router-dom";

class AuroContent extends RenderMarkdownPage {
  render() {
    return (
      <section className="auro_baseType">
        <div role="tablist" className="tabList">
          <NavLink role="tab" exact className="tab link" to={`/developer-setup/windows`} activeClassName="is-active">Windows</NavLink>
          <NavLink role="tab" exact className="tab link" to={`/developer-setup/macos`} activeClassName="is-active">macOS</NavLink>
          <NavLink role="tab" exact className="tab link" to={`/developer-setup/linux`} activeClassName="is-active">Linux</NavLink>
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
