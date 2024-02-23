import AuroComponentContent from "functions/renderComponentPage";
import { initExamples } from '@aurodesignsystem/auro-dialog/demo/index.min.js';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContentPath = 'demo/index.md';
  };

  componentDidMount() {
    super.componentDidMount();

    initExamples();
  }
}

export default AuroContent;
