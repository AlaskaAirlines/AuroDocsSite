import AuroComponentContent from "~/functions/renderComponentPage";

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.hasAccessibility = true;
    this.hasFigma = true;
    this.markdownContentPath = 'demo/api.md';
  };
}

export default AuroContent;
