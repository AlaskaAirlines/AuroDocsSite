import AuroComponentContent from "~/functions/renderIconsPage";
import content from '@aurodesignsystem/auro-icon/readme.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = content; 
  };
}

export default AuroContent;
