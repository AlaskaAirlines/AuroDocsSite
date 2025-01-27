import AuroComponentContent from "~/functions/renderComponentPage";
import '@aurodesignsystem/auro-flight/demo/index.min.js';
import content from '@aurodesignsystem/auro-flight/demo/index.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.hasDOT = true;
    this.markdownContent = content; 
    this.hasCustomElementRegistration = false;
  };
}

export default AuroContent;
