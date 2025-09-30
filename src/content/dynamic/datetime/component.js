import AuroComponentContent from "~/functions/renderComponentPage";
import '@aurodesignsystem/auro-datetime/demo/index.js';
import content from '@aurodesignsystem/auro-datetime/demo/index.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = content; 
  };
}

export default AuroContent;
