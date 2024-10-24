import AuroComponentContent from "~/functions/renderComponentPage";

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContentPath = 'README.md';
    this.hasFigma = true;
    this.hasCustomElementRegistration = false;
  };
}

export default AuroContent;
