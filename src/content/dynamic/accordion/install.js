import AuroComponentContent from "~/functions/renderComponentPage";
import content from '@aurodesignsystem/auro-accordion/readme.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = content; 
    this.hasCustomElementRegistration = false;
  };
}

export default AuroContent;
