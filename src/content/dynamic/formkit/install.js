import AuroComponentContent from "~/functions/renderComponentPage";
import content from '@aurodesignsystem/auro-formkit/readme.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = content; 
    this.hasApi = false;
    this.hasInstall = false;
  };
}

export default AuroContent;
