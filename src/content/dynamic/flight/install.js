import AuroComponentContent from "functions/renderComponentPage";

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.hasDOT = true;
    this.markdownContentPath = 'README.md';
  };
}

export default AuroContent;
