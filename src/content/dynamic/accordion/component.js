import AuroComponentContent from "~/functions/renderComponentPage";
import '@aurodesignsystem/auro-accordion/demo/index.min.js';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContentPath = 'demo/index.md';
    this.hasCustomElementRegistration = false;
  };
}

export default AuroContent;
