import AuroComponentContent from "~/functions/renderComponentPage";
import content from '@aurodesignsystem/auro-formkit/README.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = content; 
    this.hasApi = false;
  };
}

export default AuroContent;
