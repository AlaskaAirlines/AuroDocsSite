import AuroComponentContent from "~/functions/renderFormkitComponentPage";
import { initExamples } from '@aurodesignsystem/auro-formkit/auro-combobox/demo/index.js';
import content from '@aurodesignsystem/auro-formkit/auro-combobox/demo/index.md';

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
