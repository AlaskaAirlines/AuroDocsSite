import AuroComponentContent from "~/functions/renderComponentPage";
import '@aurodesignsystem/auro-loader/demo/index.js';
import content from '@aurodesignsystem/auro-loader/demo/index.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = content; 
  };
}

export default AuroContent;
