import AuroComponentContent from "~/functions/renderComponentPage";
import { initExamples } from '@aurodesignsystem/auro-carousel/demo/index.min.js';
import content from '@aurodesignsystem/auro-carousel/demo/index.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = content; 
  };

  componentDidMount() {
    super.componentDidMount();

    initExamples();
  }
}

export default AuroContent;
