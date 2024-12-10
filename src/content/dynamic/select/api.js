import AuroComponentContent from "~/functions/renderComponentPage";
import { initExamples } from "@aurodesignsystem/auro-select/demo/api.min.js";
import content from '@aurodesignsystem/auro-select/demo/api.md';

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
