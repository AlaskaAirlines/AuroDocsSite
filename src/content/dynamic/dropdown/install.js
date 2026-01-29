import AuroComponentContent from "~/functions/renderFormkitComponentPage";
import content from '@aurodesignsystem/auro-formkit/auro-dropdown/readme.md';
import { initExamples } from "@aurodesignsystem/auro-formkit/auro-dropdown/demo/index.js";

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = content; 
  };

  componentDidMount() {
    super.componentDidMount();

    setTimeout(() => {
      initExamples();
    }, 100);
  }
}

export default AuroContent;
