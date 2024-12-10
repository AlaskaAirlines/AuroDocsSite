import AuroComponentContent from "~/functions/renderComponentPage";
import content from '@aurodesignsystem/auro-combobox/README.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.hasFigma = true;
    this.markdownContent = content; 
  };
}

export default AuroContent;
