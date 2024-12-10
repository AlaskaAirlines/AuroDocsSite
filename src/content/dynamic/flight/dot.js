import AuroComponentContent from "~/functions/renderComponentPage";
import content from '@aurodesignsystem/auro-flight/demo/dotCompliance.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.hasDOT = true;
    this.markdownContent = content; 
    this.hasCustomElementRegistration = false;
  };
}

export default AuroContent;
