import AuroComponentContent from "~/functions/renderComponentPage";
import '@aurodesignsystem/auro-pane/demo/index.min.js';
import content from '@aurodesignsystem/auro-pane/demo/index.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = content; 
  };
}

export default AuroContent;
