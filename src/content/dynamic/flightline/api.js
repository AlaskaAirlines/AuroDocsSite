import AuroComponentContent from "~/functions/renderComponentPage";

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.hasDOT = true;
    this.markdownContentPath = 'demo/api.md';
  };
}

export default AuroContent;
