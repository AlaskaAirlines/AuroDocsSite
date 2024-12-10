import AuroComponentContent from "~/functions/renderComponentPage";
import content from '@aurodesignsystem/auro-datepicker/README.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = content; 
    this.hasFigma = true;
    this.hasCustomElementRegistration = false;
  };
}

export default AuroContent;
