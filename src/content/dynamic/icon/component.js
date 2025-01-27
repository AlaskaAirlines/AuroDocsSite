import AuroComponentContent from "~/functions/renderComponentPage";
import { Nav } from './nav';
import '@aurodesignsystem/auro-icon/demo/index.min.js';
import content from '@aurodesignsystem/auro-icon/demo/index.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = content; 
  };

  renderNav() {
    return (
      <Nav />
    );
  }
}

export default AuroContent;
