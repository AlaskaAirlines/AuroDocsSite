import AuroComponentContent from "functions/renderContentPage";

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.hasFigma = true;
    this.markdownContentPath = 'README.md';
  };
}

export default AuroContent;
