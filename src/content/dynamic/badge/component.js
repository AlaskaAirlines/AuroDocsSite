import AuroComponentContent from "~/functions/renderComponentPage";
import '@aurodesignsystem/auro-badge/demo/index.min.js';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContentPath = 'demo/index.md';
  };
}

export default AuroContent;
