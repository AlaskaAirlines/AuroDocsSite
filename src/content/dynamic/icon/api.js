import AuroComponentContent from "~/functions/renderComponentPage";
import { Nav } from './nav';
import content from '@aurodesignsystem/auro-icon/demo/api.md';

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
