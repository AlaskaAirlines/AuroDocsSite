import AuroComponentContent from "~/functions/renderComponentPage";
import '@aurodesignsystem/auro-flightline/demo/index.min.js';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.hasDOT = true;
    this.markdownContentPath = 'demo/index.md';
  };
}

export default AuroContent;
