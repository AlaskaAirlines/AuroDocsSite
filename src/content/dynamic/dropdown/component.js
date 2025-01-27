import AuroComponentContent from "~/functions/renderComponentPage";
import "@aurodesignsystem/auro-dropdown/demo/index.min.js";
import content from '@aurodesignsystem/auro-dropdown/demo/index.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.hasFigma = true;
    this.markdownContent = content; 
  };
}

export default AuroContent;
