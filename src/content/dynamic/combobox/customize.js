import AuroComponentContent from "~/functions/renderFormkitComponentPage";
import { initExamples } from '@aurodesignsystem/auro-formkit/auro-combobox/demo/customize.js';
import content from '@aurodesignsystem/auro-formkit/auro-combobox/demo/customize.md';

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

    initExamples();
  }
}

export default AuroContent;
