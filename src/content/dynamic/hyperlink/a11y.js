import AuroComponentContent from "~/functions/renderComponentPage";
import content from '@aurodesignsystem/auro-hyperlink/demo/a11y.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.hasAccessibility = true;
    this.hasFigma = true;
    this.markdownContent = content; 
  };
}

export default AuroContent;
