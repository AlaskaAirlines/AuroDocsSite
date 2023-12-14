import AuroComponentContent from "functions/renderContentPage";

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    // this.nameSpace = `aurodesignsystem`;
    this.name = `background`;
    this.markdownContent = `https://raw.githubusercontent.com/AlaskaAirlines/auro-${this.name}/master/README.md`;
  };
}

export default AuroContent;
