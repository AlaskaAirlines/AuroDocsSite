import AuroComponentContent from "~/functions/renderComponentPage";
import '@aurodesignsystem/auro-slideshow/demo/demo-index.js';
import content from '@aurodesignsystem/auro-slideshow/demo/index.md';

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
