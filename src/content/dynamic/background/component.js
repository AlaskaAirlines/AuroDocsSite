import AuroComponentContent from "~/functions/renderComponentPage";
import '@aurodesignsystem/auro-background/demo/index.min.js';
import content from '@aurodesignsystem/auro-background/demo/index.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = content; 
  };
}

export default AuroContent;
