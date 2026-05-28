import AuroComponentContent from "~/functions/renderComponentPage";
import content from '@aurodesignsystem/auro-hyperlink/readme.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.hasAccessibility = true;
    this.hasWhy = true;
    this.hasCssOnly = true;
    this.markdownContent = content; 
  };
}

export default AuroContent;
