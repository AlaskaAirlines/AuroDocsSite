import AuroComponentContent from "functions/renderComponentPage";
import { initExamples } from "@aurodesignsystem/auro-toast/demo/api.min.js";

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.hasExamples = false;
    this.markdownContentPath = 'demo/api.md';
    this.hasCustomElementRegistration = false;
  };

  componentDidMount() {
    super.componentDidMount();

    initExamples();
  }
}

export default AuroContent;
