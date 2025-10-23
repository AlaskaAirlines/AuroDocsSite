import AuroComponentContent from "~/functions/renderComponentPage";
import '@aurodesignsystem/auro-avatar/demo/index.js';
import content from '@aurodesignsystem/auro-avatar/demo/index.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = content; 
    this.hasCustomElementRegistration = false;
  };
}

export default AuroContent;
