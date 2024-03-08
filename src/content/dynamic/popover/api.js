import AuroComponentContent from "functions/renderComponentPage";
import { initExamples } from "@aurodesignsystem/auro-popover/demo/api.min.js";

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContentPath = 'demo/api.md';
  };

  componentDidMount() {
    super.componentDidMount();

    initExamples();
  }
}

export default AuroContent;
