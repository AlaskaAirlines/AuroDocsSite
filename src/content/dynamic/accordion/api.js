import AuroComponentContent from "~/functions/renderComponentPage";
import '@aurodesignsystem/auro-accordion/demo/api.min.js';
import { initExamples } from "@aurodesignsystem/auro-accordion/demo/api.min.js";

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContentPath = 'demo/api.md';
    this.hasCustomElementRegistration = false;
  };

  componentDidMount() {
    super.componentDidMount();

    initExamples();
  }
}

export default AuroContent;
