import AuroComponentContent from "~/functions/renderComponentPage";
import content from '@aurodesignsystem/auro-skeleton/demo/api.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = content; 
  };
}

export default AuroContent;

