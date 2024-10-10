import RenderMarkdownPage from "~/functions/renderMarkdownPage";
import { NavLink } from "react-router-dom";

class AuroContent extends RenderMarkdownPage {
  render() {
    return (
      <section className="auro_baseType">
        <div role="tablist" className="tabList">
          <NavLink role="tab" exact className="tab link" to={`/developer-setup/windows`} activeclassname="is-active">Windows</NavLink>
          <NavLink role="tab" exact className="tab link" to={`/developer-setup/macos`} activeclassname="is-active">macOS</NavLink>
          <NavLink role="tab" exact className="tab link" to={`/developer-setup/linux`} activeclassname="is-active">Linux</NavLink>
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
