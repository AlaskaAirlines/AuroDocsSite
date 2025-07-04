import AuroComponentContent from "~/functions/renderComponentPage";
import '@aurodesignsystem/auro-slideshow/demo/api.js';
import content from '@aurodesignsystem/auro-slideshow/demo/api.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = content; 
  };

  componentDidMount() {
    super.componentDidMount();

  }
}

export default AuroContent;
