import AuroComponentContent from "~/functions/renderComponentPage";
import '@aurodesignsystem/auro-sidenav/demo/index.min.js';
import content from '@aurodesignsystem/auro-sidenav/demo/index.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = content; 
  };
}

export default AuroContent;

