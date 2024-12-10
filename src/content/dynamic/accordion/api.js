import AuroComponentContent from "~/functions/renderComponentPage";
import '@aurodesignsystem/auro-accordion/demo/api.min.js';
import { initExamples } from "@aurodesignsystem/auro-accordion/demo/api.min.js";
import content from '@aurodesignsystem/auro-accordion/demo/api.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = content; 
    this.hasCustomElementRegistration = false;
  };

  componentDidMount() {
    super.componentDidMount();

    initExamples();
  }
}

export default AuroContent;
