import AuroComponentContent from "functions/renderContentPage";

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.nameSpace = 'aurodesignsystem';
    this.componentName = 'avatar';
    this.markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/auro-avatar/main/docs/api.md';
  };
}

export default AuroContent;
