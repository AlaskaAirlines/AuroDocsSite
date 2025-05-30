import AuroComponentContent from "~/functions/renderComponentPage";
import content from '@aurodesignsystem/auro-flightline/demo/api.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.hasDOT = true;
    this.markdownContent = content; 
  };
}

export default AuroContent;
