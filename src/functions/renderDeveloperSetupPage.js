import RenderMarkdownPage from "~/functions/renderMarkdownPage";
import { NavLink } from "react-router-dom";

class AuroContent extends RenderMarkdownPage {
  render() {
    return (
      <section className="auro_baseType">
        <div role="tablist" className="tabList">
          <NavLink role="tab" end className="tab link" to={`/developer-setup/windows`} >Windows</NavLink>
          <NavLink role="tab" end className="tab link" to={`/developer-setup/macos`} >macOS</NavLink>
          <NavLink role="tab" end className="tab link" to={`/developer-setup/linux`} >Linux</NavLink>
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
