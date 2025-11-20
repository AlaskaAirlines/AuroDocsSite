import AuroComponentContent from "~/functions/renderComponentPage";
import content from '@aurodesignsystem/auro-alert/readme.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.hasFigma = false;
    this.markdownContent = content; 
  };
}

export default AuroContent;
