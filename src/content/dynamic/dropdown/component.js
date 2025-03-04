import AuroComponentContent from "~/functions/renderFormkitComponentPage";
import "@aurodesignsystem/auro-formkit/auro-dropdown/demo/index.js";
import content from '@aurodesignsystem/auro-formkit/auro-dropdown/demo/index.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = content; 
  };
}

export default AuroContent;