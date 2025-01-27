import AuroComponentContent from "~/functions/renderComponentPage";
import '@aurodesignsystem/auro-flightline/demo/index.min.js';
import content from '@aurodesignsystem/auro-flightline/demo/index.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.hasDOT = true;
    this.markdownContent = content; 
  };
}

export default AuroContent;
