import AuroComponentContent from "~/functions/renderFormkitComponentPage";
import { initExamples } from "@aurodesignsystem/auro-formkit/auro-select/demo/api.js";
import content from '@aurodesignsystem/auro-formkit/auro-select/demo/api.md';

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