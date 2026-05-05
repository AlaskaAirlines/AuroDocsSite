import AuroComponentContent from "~/functions/renderFormkitComponentPage";
import { initExamples } from "@aurodesignsystem/auro-formkit/auro-dropdown/demo/api.js";
import content from '@aurodesignsystem/auro-formkit/auro-dropdown/demo/api.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.hasAccessibility = true;
    this.hasVoiceover = true;
    this.hasGettingStarted = true;
    this.hasCustomize = true;
    this.hasDesign = true;
    this.hasKeyboardBehavior = true;
    this.hasInstall = false;
    this.hasSubNav = true;
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
