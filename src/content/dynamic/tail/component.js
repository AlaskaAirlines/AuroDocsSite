import AuroComponentContent from "~/functions/renderComponentPage";
import '@aurodesignsystem/auro-tail/demo/index.js';
import content from '@aurodesignsystem/auro-tail/demo/index.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = content; 
    this.hasCustomElementRegistration = false;
  };
}

export default AuroContent;
