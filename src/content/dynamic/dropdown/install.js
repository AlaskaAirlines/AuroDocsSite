import AuroComponentContent from "functions/renderComponentPage";

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.hasFigma = true;
    this.markdownContentPath = 'README.md';
    this.hasCustomElementRegistration = false;
  };
}

export default AuroContent;
