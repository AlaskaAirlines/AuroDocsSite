import AuroComponentContent from "~/functions/renderComponentPage";
import { initExamples } from '@aurodesignsystem/auro-combobox/demo/index.min.js';
import content from '@aurodesignsystem/auro-combobox/demo/index.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.hasFigma = true;
    this.markdownContent = content; 
  };

  componentDidMount() {
    super.componentDidMount();

    initExamples();
  }
}

export default AuroContent;
