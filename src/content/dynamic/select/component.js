import AuroComponentContent from "~/functions/renderFormkitComponentPage";
import "@aurodesignsystem/auro-formkit/auro-select/demo/index.js";
import content from '@aurodesignsystem/auro-formkit/auro-select/demo/index.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = content; 
  };

  componentDidMount() {
    super.componentDidMount();

  }
}

export default AuroContent;