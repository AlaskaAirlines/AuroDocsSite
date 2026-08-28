import RenderMarkdownPage from "~/functions/renderComponentPage";
// Shared iconography tab strip — single source of truth for the Icons/Tails/
// Pictograms/Install/etc. tabs. Both the markdown-driven icon pages (which
// extend this class) and the hand-authored gallery pages (icons.js, tails.js,
// pictograms.js) render the same <Nav /> so the tab list can't drift.
import { Nav } from '~/content/dynamic/icons/nav.js';

class AuroContent extends RenderMarkdownPage {
  constructor(props) {
    super(props);

    this.nameSpace = 'alaskaairux';
    this.componentName = 'icons';
    this.packageName = '@alaskaairux/icons';
    this.hasCustomElementRegistration = false;
  };

  renderNav() {
    return <Nav />;
  }
}

export default AuroContent;
