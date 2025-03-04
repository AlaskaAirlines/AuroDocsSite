import AuroComponentContent from "~/functions/renderFormkitComponentPage";
import content from '@aurodesignsystem/auro-formkit/auro-radio/demo/api.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = content; 
  };
}

export default AuroContent;