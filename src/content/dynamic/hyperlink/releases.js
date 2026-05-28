import AuroComponentContent from "~/functions/renderComponentPage";

class AuroContent extends AuroComponentContent {
  constructor(props) {
    super(props);

    this.hasAccessibility = true;
    this.hasWhy = true;
    this.hasCssOnly = true;
  };
}

export default AuroContent;
