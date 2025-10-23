import AuroComponentContent from "~/functions/renderComponentPage";
import '@aurodesignsystem/auro-alert/demo/index.js';
import content from '@aurodesignsystem/auro-alert/demo/index.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.hasFigma = true;
    this.markdownContent = content;
  };
}

export default AuroContent;
