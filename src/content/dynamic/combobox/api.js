import AuroComponentContent from "~/functions/renderComponentPage";
import { initExamples } from '@aurodesignsystem/auro-combobox/demo/api.min.js';
import content from '@aurodesignsystem/auro-combobox/demo/api.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.hasFigma = true;
    this.hasApiExamples = true;
    this.markdownContent = content; 
  };

  componentDidMount() {
    super.componentDidMount();

    initExamples();
  }
}

export default AuroContent;
