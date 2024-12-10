import AuroComponentContent from "~/functions/renderComponentPage";
import { initExamples } from "@aurodesignsystem/auro-popover/demo/api.min.js";
import content from '@aurodesignsystem/auro-popover/demo/api.md';

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
