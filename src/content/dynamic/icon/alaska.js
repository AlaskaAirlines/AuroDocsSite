import AuroComponentContent from "~/functions/renderComponentPage";
import '@aurodesignsystem/auro-icon/demo/alaska.min.js';
import { Nav } from './nav';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContentPath = 'demo/alaska.md';
  };

  renderNav() {
    return (
      <Nav />
    );
  }
}

export default AuroContent;
