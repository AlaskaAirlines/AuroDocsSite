import AuroComponentContent from "~/functions/renderFormkitComponentPage";
import content from '@aurodesignsystem/auro-formkit/auro-input/demo/voiceover.md';

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
  }
}

export default AuroContent;
