import AuroComponentContent from "~/functions/renderComponentPage";
import { initExamples } from '@aurodesignsystem/auro-datepicker/demo/api.min.js';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContentPath = 'demo/api.md';
    this.hasFigma = true;
    this.hasCustomElementRegistration = false;
  };

  componentDidMount() {
    super.componentDidMount();

    initExamples();
  }
}

export default AuroContent;
