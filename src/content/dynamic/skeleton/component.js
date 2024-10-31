import AuroComponentContent from "~/functions/renderComponentPage";
import '@aurodesignsystem/auro-skeleton/demo/index.min.js';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContentPath = 'demo/index.md';
  };
}

export default AuroContent;

