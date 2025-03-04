import AuroComponentContent from "~/functions/renderFormkitComponentPage";
import content from '@aurodesignsystem/auro-formkit/auro-checkbox/demo/index.md';
import '@aurodesignsystem/auro-formkit/auro-checkbox/demo/index.js';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = content; 
  };
}

export default AuroContent;
