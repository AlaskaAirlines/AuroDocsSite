import AuroComponentContent from "~/functions/renderComponentPage";
import '@aurodesignsystem/auro-hyperlink/demo/index.min.js';
import content from '@aurodesignsystem/auro-hyperlink/demo/index.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.hasAccessibility = true;
    this.hasFigma = true;
    this.markdownContent = content; 
  };
}

export default AuroContent;
