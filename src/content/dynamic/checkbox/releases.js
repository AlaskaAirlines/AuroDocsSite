import AuroComponentContent from "~/functions/renderFormkitComponentPage";

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
  };
}

export default AuroContent;
