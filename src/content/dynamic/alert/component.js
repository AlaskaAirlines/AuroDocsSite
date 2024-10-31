import AuroComponentContent from "~/functions/renderComponentPage";
import '@aurodesignsystem/auro-alert/demo/index.min.js';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.hasFigma = true;
    this.markdownContentPath = 'demo/index.md';
  };
}

export default AuroContent;
