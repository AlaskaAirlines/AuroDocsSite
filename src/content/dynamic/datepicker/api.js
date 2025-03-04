import AuroComponentContent from "~/functions/renderFormkitComponentPage";
import { initExamples } from '@aurodesignsystem/auro-formkit/auro-datepicker/demo/api.js';
import content from '@aurodesignsystem/auro-formkit/auro-datepicker/demo/api.md';

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