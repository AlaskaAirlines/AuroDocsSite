import AuroComponentContent from "~/functions/renderFormkitComponentPage";
import  '@aurodesignsystem/auro-formkit/auro-form/demo/api.js';
import content from '@aurodesignsystem/auro-formkit/auro-form/demo/api.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.hasApiExamples = true;
    this.markdownContent = content; 
  };

  componentDidMount() {
    super.componentDidMount();

  }
}

export default AuroContent;