import AuroComponentContent from "~/functions/renderComponentPage";
import { initExamples } from "@aurodesignsystem/auro-menu/demo/api.min.js";
import content from '@aurodesignsystem/auro-menu/demo/api.md';

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
