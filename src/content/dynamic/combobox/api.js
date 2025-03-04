import AuroComponentContent from "~/functions/renderFormkitComponentPage";
import { initExamples } from '@aurodesignsystem/auro-formkit/auro-combobox/demo/api.js';
import content from '@aurodesignsystem/auro-formkit/auro-combobox/demo/api.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.hasApiExamples = true;
    this.markdownContent = content; 
  };

  componentDidMount() {
    super.componentDidMount();

    initExamples();
  }
}

export default AuroContent;
