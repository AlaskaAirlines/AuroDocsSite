import AuroComponentContent from "~/functions/renderIconsPage";
import content from '@aurodesignsystem/auro-icon/README.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = content; 
  };
}

export default AuroContent;
