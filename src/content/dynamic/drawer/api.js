import AuroComponentContent from "~/functions/renderComponentPage";
import { initExamples } from '@aurodesignsystem-dev/auro-drawer/demo/api.js';
import content from '@aurodesignsystem-dev/auro-drawer/demo/api.md';

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
