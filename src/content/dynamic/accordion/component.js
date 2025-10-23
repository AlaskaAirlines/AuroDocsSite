import AuroComponentContent from "~/functions/renderComponentPage";
import '@aurodesignsystem/auro-accordion/demo/index.js';
import content from '@aurodesignsystem/auro-accordion/demo/index.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = content;
    this.hasCustomElementRegistration = false;
  };
}

export default AuroContent;
