import AuroComponentContent from "~/functions/renderComponentPage";
import { initExamples } from '@aurodesignsystem/auro-drawer/demo/index.js';
import content from '@aurodesignsystem/auro-drawer/demo/index.md';

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
